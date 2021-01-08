import readlineSync from 'readline-sync';

// Get greatest common divisor
function gcd(a, b) {
  return (a % b) ? gcd(b, a % b) : Math.abs(b);
}

// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(minNumber, maxNumber) {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

const gameRounds = 3;

const runGamesEngine = (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?\n');
  const greetingUser = `Hello, ${name}`;
  console.log(greetingUser);

  console.log(gameDescription);

  for (let i = 0; i < gameRounds; i += 1) {
    const round = gameData[i];

    const answer = readlineSync.question(`Question: ${round.question}\n`);
    console.log(`Your answer: ${answer}`);

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

export {
  getRandomIntInclusive,
  gameRounds,
  runGamesEngine,
  gcd,
};
