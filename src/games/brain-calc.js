import { gameRounds, getRandomIntInclusive, runGamesEngine } from '../index.js';

const operations = ['+', '-', '*'];
const minNumber = 1;
const maxNumber = 10;

function getGameData() {
  const data = [];
  for (let i = 1; i <= gameRounds; i += 1) {
    const number1 = getRandomIntInclusive(minNumber, maxNumber);
    const number2 = getRandomIntInclusive(minNumber, maxNumber);
    const operation = operations[Math.floor(Math.random() * operations.length)];

    const question = `${number1} ${operation} ${number2}`;

    let rightAnswer;
    switch (operation) {
      case '+':
        rightAnswer = number1 + number2;

        break;
      case '-':
        rightAnswer = number1 - number2;

        break;
      case '*':
        rightAnswer = number1 * number2;

        break;
      default:
        console.log('Error: unknown operation');

        break;
    }

    rightAnswer = `${rightAnswer}`;

    data.push({ question, rightAnswer });
  }

  return data;
}

const run = () => {
  const gameDescription = 'What is the result of the expression?';
  const gameData = getGameData();

  runGamesEngine(gameDescription, gameData);
};

export default run;
