import { Question } from "../models/Question.js";
import { data } from "./data.js";

// Función para seleccionar preguntas al azar
function selectRandomQuestions(allQuestions, numQuestions) {
  const selectedQuestions = [];
  const copyOfQuestions = [...allQuestions];

  for (let i = 0; i < numQuestions; i++) {
    if (copyOfQuestions.length === 0) {
      break; // Si te quedas sin preguntas, detén el bucle
    }
    const randomIndex = Math.floor(Math.random() * copyOfQuestions.length);
    selectedQuestions.push(copyOfQuestions.splice(randomIndex, 1)[0]);
  }

  return selectedQuestions;
}

// Función para mezclar las opciones de respuesta en una pregunta
function shuffleChoices(question) {
  const choices = [...question.choices];
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return choices;
}

// Seleccionar 50 preguntas al azar
const selectedQuestions = selectRandomQuestions(data, 3);

// Mezclar las opciones de respuesta en cada pregunta
for (const question of selectedQuestions) {
  question.choices = shuffleChoices(question);
}

console.log(data); 

export const questions = selectedQuestions.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

