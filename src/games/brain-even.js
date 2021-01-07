import { getRandomIntInclusive, gameRounds, runGamesEngine } from '../index.js';

const minNumber = 1;
const maxNumber = 4;

function getGameData() {
  const data = [];
  for (let i = 1; i <= gameRounds; i += 1) {
    const number = getRandomIntInclusive(minNumber, maxNumber);
    const rightAnswer = ((number % 2) === 0) ? 'yes' : 'no';

    data.push({ question: number, rightAnswer });
  }

  return data;
}

const run = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = getGameData();

  runGamesEngine(gameDescription, gameData);
};

export default run;
