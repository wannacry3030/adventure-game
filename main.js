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
      progress += 25;
      updateProgress();
      updateStory(
        "Você começa a olhar em volta do quarto em busca de uma saída. Há uma janela alta, mas ela está trancada e parece resistente. Na parede oposta, há um painel de controle que controla a porta do quarto, mas você não tem a senha. O que você faz agora?"
      );
      updateOptions([
        "Tentar forçar a janela",
        "Procurar por pistas no quarto",
        "Pedir ajuda através da porta fechada",
      ]);
      break;

    case "option-2":
      // update progress and story
      progress += 50;
      updateProgress();
      updateStory(
        "Você decide começar a investigar a megacorporação GenoTech para obter informações úteis que possam ajudar em sua missão de roubar os dados corporativos. Você começa a pesquisar sobre a empresa na internet, procurando por notícias, informações financeiras e relatórios de mercado. Você descobre que a SayonaraTech é uma das maiores empresas de biotecnologia do mundo, especializada em pesquisa genética e produção de medicamentos avançados. No entanto, também há muitas críticas e controvérsias em torno da empresa, com alegações de experimentação ilegal em seres humanos e manipulação genética ilegal. Você decide que precisa de mais informações e começa a traçar um plano para invadir a sede da GenoTech e obter os dados que precisa."
      );
      updateOptions([
        "Hackear o sistema de segurança",
        "Infiltrar-se na SayonaraTech",
        "Buscar informações em outras fontes",
      ]);
      break;

    case "option-3":
      // update progress and story
      progress += 75;
      updateProgress();
      updateStory(
        "Você decide que precisa de ajuda para completar sua missão. Você pega seu comunicador e liga para um antigo colega que trabalhou na GenoTech antes de ser demitido. Ele atende e você explica sua situação, pedindo ajuda ou informações que possam ajudá-lo a roubar os dados corporativos. Seu amigo fica um pouco hesitante, mas concorda em ajudar. Ele diz que vai enviar informações para o seu comunicador assim que as conseguir, e que você deve se manter em contato com ele. Você agradece e desliga, sentindo-se um pouco mais confiante em sua missão."
      );
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
  "Bem-vindo ao mundo cyberpunk de Gama City. Luzes brilhantes de neon iluminam as ruas escuras e sujas, anunciando produtos de alta tecnologia e serviços ilegais. A cidade é controlada por megacorporações que detêm todo o poder e riqueza, enquanto a maioria dos cidadãos vive em condições precárias. Você acorda em um quarto sujo e mal iluminado, sem lembrar de como chegou lá. Olhando em volta, você vê apenas uma janela pequena e uma porta trancada. Um bilhete deixado sobre a mesa diz: 'Você é um hacker. Seu próximo trabalho é recuperar dados corporativos altamente confidenciais da megacorporação GenoTech. Seja rápido e discreto, e você será recompensado generosamente. Mas cuidado, as consequências de falhar são graves'. Você se levanta, sentindo o peso da responsabilidade sobre seus ombros. Você tem uma missão a cumprir e pouco tempo para fazê-lo. O que você vai fazer agora?"
);
updateOptions([
  "Tentar encontrar uma saída do quarto",
  "Investigar GenoTech",
  "Contatar um aliado",
]);
