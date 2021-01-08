import { getRandomIntInclusive, gameRounds, runGamesEngine } from '../index.js';

const minNumber = 1;
const maxNumber = 10;

const minProgressionLength = 5;
const maxProgressionLength = 10;
const progressionLength = getRandomIntInclusive(minProgressionLength, maxProgressionLength);

function getProgression(firstNumber, progressionDiff) {
  const progression = [];

  if (!Number.isInteger(firstNumber) || !Number.isInteger(progressionDiff)) {
    return progression;
  }

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstNumber + (progressionDiff * i);
  }

  return progression;
}

function getGameData() {
  const data = [];
  for (let i = 1; i <= gameRounds; i += 1) {
    const firstNumber = getRandomIntInclusive(minNumber, maxNumber);
    const progressionStep = getRandomIntInclusive(minNumber, maxNumber);
    const progression = getProgression(firstNumber, progressionStep) || [];

    if (progression.length === 0) {
      return data;
    }

    const hiddenNumberIndex = getRandomIntInclusive(0, progression.length - 1);

    let question = `${progression[0]}`;
    for (let index = 1; index < progression.length; index += 1) {
      const questionPart = (index === hiddenNumberIndex) ? '..' : progression[index];
      question = `${question} ${questionPart}`;
    }

    const rightAnswer = `${progression[hiddenNumberIndex]}`;

    data.push({ question, rightAnswer });
  }

  return data;
}

const run = () => {
  const gameDescription = 'What number is missing in the progression?';
  const gameData = getGameData();

  runGamesEngine(gameDescription, gameData);
};

export default run;
