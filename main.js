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
      updateStory(
        "Você escolheu a opção 1. Infelizmente, você é pego pela polícia enquanto tentava hackear um caixa eletrônico. Fim de jogo."
      );
      updateOptions([]);
      break;
    case "option-2":
      // update progress and story
      progress += 50;
      updateProgress();
      updateStory(
        "Você escolheu a opção 2. Você se junta a uma gangue de rua e começa a realizar trabalhos sujos para eles. Fim de jogo."
      );
      updateOptions([]);
      break;
    case "option-3":
      // update progress and story
      progress += 75;
      updateProgress();
      updateStory(
        "Você escolheu a opção 3. Você decide usar suas habilidades de hackeamento para invadir a base de dados de uma megacorporação e roubar informações valiosas. Mas antes de começar, você precisa escolher o tipo de ferramentas que vai usar:"
      );
      updateOptions([
        "Ferramentas de hackeamento convencionais",
        "Ferramentas de hackeamento avançadas",
        "Ferramentas de hackeamento experimental",
      ]);
      break;
    case "option-3-1":
      // update progress and story
      progress += 10;
      updateProgress();
      updateStory(
        "Você escolheu as ferramentas de hackeamento convencionais. Você consegue invadir a base de dados, mas as informações que encontra não são tão valiosas quanto você esperava. Fim de jogo."
      );
      updateOptions([]);
      break;
    case "option-3-2":
      // update progress and story
      progress += 20;
      updateProgress();
      updateStory(
        "Você escolheu as ferramentas de hackeamento avançadas. Com elas, você consegue invadir a base de dados e encontrar informações valiosas. Você as vende para um grupo de ativistas que estão lutando contra as megacorporações. Fim de jogo."
      );
      updateOptions([]);
      break;
    case "option-3-3":
      // update progress and story
      progress += 30;
      updateProgress();
      updateStory(
        "Você escolheu as ferramentas de hackeamento experimental. Elas funcionam bem, mas você é descoberto pela equipe de segurança da megacorporação."
      );
  }
}

// start the game
updateProgress();
updateStory(
  "Bem-vindo ao mundo cyberpunk de Gama City. Luzes brilhantes de neon iluminam as ruas escuras e sujas, anunciando produtos de alta tecnologia e serviços ilegais. A cidade é controlada por megacorporações que detêm todo o poder e riqueza, enquanto a maioria dos cidadãos vive em condições precárias."
);
updateOptions(["Option 1", "Option 2", "Option 3"]);
