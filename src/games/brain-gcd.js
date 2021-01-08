import {
  gameRounds,
  getRandomIntInclusive,
  runGamesEngine,
  gcd,
} from '../index.js';

const minNumber = 1;
const maxNumber = 100;

function getGameData() {
  const data = [];
  for (let i = 1; i <= gameRounds; i += 1) {
    const number1 = getRandomIntInclusive(minNumber, maxNumber);
    const number2 = getRandomIntInclusive(minNumber, maxNumber);

    const question = `${number1} ${number2}`;

    let rightAnswer = gcd(number1, number2);
    rightAnswer = `${rightAnswer}`;

    data.push({ question, rightAnswer });
  }

  return data;
}

const run = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameData = getGameData();

  runGamesEngine(gameDescription, gameData);
};

export default run;
