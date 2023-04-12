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
      updateStory("You chose option 1. This is the end of the game.");
      updateOptions([]);
      break;
    case "option-2":
      // update progress and story
      progress += 50;
      updateProgress();
      updateStory("You chose option 2. This is the end of the game.");
      updateOptions([]);
      break;
    case "option-3":
      // update progress and story
      progress += 75;
      updateProgress();
      updateStory("You chose option 3. Choose your next step:");
      updateOptions(["Option 3-1", "Option 3-2", "Option 3-3"]);
      break;
    case "option-3-1":
      // update progress and story
      progress += 10;
      updateProgress();
      updateStory("You chose option 3-1. This is the end of the game.");
      updateOptions([]);
      break;
    case "option-3-2":
      // update progress and story
      progress += 20;
      updateProgress();
      updateStory("You chose option 3-2. This is the end of the game.");
      updateOptions([]);
      break;
    case "option-3-3":
      // update progress and story
      progress += 30;
      updateProgress();
      updateStory("You chose option 3-3. This is the end of the game.");
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
updateOptions(["Option 1", "Option 2", "Option 3"]);
