const guessesNumber = (minNumber, maxNumber) => {
  return Math.floor(((maxNumber - minNumber) / 2) + minNumber);
};

const checksGuessedNumber = (guessNumber, minNumber, maxNumber) => {
  let flag = true;
  let adjacentRangeValue = guessesNumber(minNumber, maxNumber);
  while (guessNumber != adjacentRangeValue) {
    if (guessNumber < adjacentRangeValue) {
      flag = false;
      console.log(`Компьютер 2: Пробую число ${adjacentRangeValue}`);
      console.log(`Компьютер 1: Меньше.`);
      adjacentRangeValue = Math.floor(adjacentRangeValue / 2);
    } else if (guessNumber > adjacentRangeValue && !flag) {
        console.log(`Компьютер 2: Пробую число ${adjacentRangeValue}`);
        console.log(`Компьютер 1: Больше.`);
        ++adjacentRangeValue;
    } else if (guessNumber > adjacentRangeValue && flag) {
      flag = false;
      console.log(`Компьютер 2: Пробую число ${adjacentRangeValue}`);
      console.log(`Компьютер 1: Больше.`);
      adjacentRangeValue = Math.floor(adjacentRangeValue * 2);
    } else if (guessNumber < adjacentRangeValue && !flag) {
      console.log(`Компьютер 2: Пробую число ${adjacentRangeValue}`);
      console.log(`Компьютер 1: Меньше.`);
      --adjacentRangeValue;
    }
  }
  console.log(`Компьютер 2: Пробую число ${adjacentRangeValue}`)
  console.log(`Компьютер 1: Угадал!`)
}

console.log(checksGuessedNumber(5, 1, 100));
console.log(checksGuessedNumber(10, 1, 100));
console.log(checksGuessedNumber(15, 1, 100));
console.log(checksGuessedNumber(20, 1, 100));
