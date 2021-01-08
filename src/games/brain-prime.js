import { gameRounds, getRandomIntInclusive, runGamesEngine } from '../index.js';

const minNumber = 1;
const maxNumber = 100;

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  const numberSquareRoot = Math.sqrt(number);
  for (let i = 2; i <= numberSquareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getGameData() {
  const data = [];
  for (let i = 1; i <= gameRounds; i += 1) {
    const number = getRandomIntInclusive(minNumber, maxNumber);

    const rightAnswer = isPrime(number) ? 'yes' : 'no';

    data.push({ question: `${number}`, rightAnswer });
  }

  return data;
}

const run = () => {
  const gameDescription = '"yes" if given number is prime. Otherwise answer "no".';
  const gameData = getGameData();

  runGamesEngine(gameDescription, gameData);
};

export default run;
