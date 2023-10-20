export class UI {
  constructor() {}

  /**
   *
   * @param {string} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }

  /**
   *
   * @param {string[]} choices
   * @param {Function} callback
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];
      choicesContainer.append(button);
    }
  }

  showScores(score) {
    const gameOverHTML = `
      <h1>Result</h1>
      <h2 id="score">Your scores: ${score}</h2>
    `;

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  /**
   *
   * @param {Function} callback
   */
  buttonNextQuestion (callback) {
    const buttonNextQuestion = document.createElement("button");
    buttonNextQuestion.id = "buttonNextQuestion";
    buttonNextQuestion.innerText = "Siguiente";
    buttonNextQuestion.addEventListener("click", () => callback());
    const buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.innerHTML = "";
    var element = document.getElementById("correctAnswer");
    element.innerHTML = "";
    buttonContainer.appendChild(buttonNextQuestion);
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
  }
}