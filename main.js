// define variables
let progress = 0;

// define functions
function updateProgress() {
  const progressElement = document.getElementById("progress");
  progressElement.textContent = `Progress: ${progress}%`;
}

function updateStory(newStory) {
  const storyElement = document.getElementById("story");
  storyElement.textContent = newStory;
}

function updateOptions(options) {
  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  options.forEach((option, index) => {
    const optionElement = document.createElement("li");
    const optionLink = document.createElement("a");
    optionLink.href = "#";
    optionLink.id = `option-${index + 1}`;
    optionLink.textContent = option;
    optionLink.addEventListener("click", selectOption);
    optionElement.appendChild(optionLink);
    optionsElement.appendChild(optionElement);
  });
}

function selectOption(event) {
  event.preventDefault();

  const optionId = event.target.id;
  switch (optionId) {
    case "option-1":
      // update progress and story
      progress += 25;
      updateProgress();
      updateStory("Você escolheu a opção 1. Este é o fim do jogo.");
      updateOptions([]);
      break;
    case "option-2":
      // update progress and story
      progress += 50;
      updateProgress();
      updateStory("Você escolheu a opção 2. Este é o fim do jogo.");
      updateOptions([]);
      break;
    case "option-3":
      // update progress and story
      progress += 75;
      updateProgress();
      updateStory("Você escolheu a opção 3. O que você vai fazer a seguir?");
      updateOptions([
        "Hackear o sistema de segurança",
        "Entrar no bar próximo para obter informações",
        "Seguir em frente sem parar",
      ]);
      break;
    case "option-3-1":
      // update progress and story
      progress += 10;
      updateProgress();
      updateStory(
        "Você hackeou o sistema de segurança com sucesso e descobriu a localização do seu objetivo. Parabéns, você venceu o jogo!"
      );
      updateOptions([]);
      break;
    case "option-3-2":
      // update progress and story
      progress += 20;
      updateProgress();
      updateStory(
        "Você encontrou um contato valioso no bar e obteve informações cruciais para a sua missão. Parabéns, você venceu o jogo!"
      );
      updateOptions([]);
      break;
    case "option-3-3":
      // update progress and story
      progress += 30;
      updateProgress();
      updateStory(
        "Você seguiu em frente sem parar e acabou se perdendo nas ruas escuras de Gama City. Infelizmente, você perdeu o jogo."
      );
      updateOptions([]);
      break;
    default:
      break;
  }
}

// start the game
updateProgress();
updateStory(
  "Bem-vindo ao mundo cyberpunk de Gama City. Luzes brilhantes de neon iluminam as ruas escuras e sujas, anunciando produtos de alta tecnologia e serviços ilegais. A cidade é controlada por megacorporações que detêm todo o poder e riqueza, enquanto a maioria dos cidadãos vive em condições precárias."
);
updateOptions(["Opção 1", "Opção 2", "Opção 3"]);
