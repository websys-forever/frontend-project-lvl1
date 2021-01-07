import readlineSync from 'readline-sync';
import name from './cli.js';

const gameRounds = 3;
const minNumber = 1;
const maxNumber = 4;

// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive() {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getGameData() {
  const data = [];
  for (let i = 1; i <= gameRounds; i += 1) {
    const number = getRandomIntInclusive();
    const rightAnswer = ((number % 2) === 0) ? 'yes' : 'no';

    data.push({ question: number, rightAnswer });
  }

  return data;
}

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const greetingUser = `Hello, ${name}`;
  console.log(greetingUser);

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(gameDescription);

  const gameData = getGameData();

  for (let i = 0; i < gameRounds; i += 1) {
    const round = gameData[i];
    const answer = readlineSync.question(`Question: ${round.question}\n`);

    if (answer === round.rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${round.rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);

      return false;
    }
  }

  console.log(`Congratulations, ${name}!`);

  return true;
};

export default runEvenGame;
