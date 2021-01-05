import readlineSync from 'readline-sync';

export { userName };

const userName = readlineSync.question('May I have your name? ');