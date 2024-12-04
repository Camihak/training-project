const guessesNumber = (guessNumber, minNumber, maxNumber) => {
  let flag = true;
  let adjacentRangeValue = Math.floor(((maxNumber - minNumber) / 2) + minNumber);
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
    } else {
        console.log(`Компьютер 2: Пробую число ${adjacentRangeValue}`);
        console.log(`Компьютер 1: Меньше.`);
        --adjacentRangeValue;
    }
  }
  console.log(`Компьютер 2: Пробую число ${adjacentRangeValue}`)
  console.log(`Компьютер 1: Угадал!`)
}

console.log(guessesNumber(5, 1, 100));
console.log(guessesNumber(6, 10, 20));
console.log(guessesNumber(17, 11, 31));
console.log(guessesNumber(20, 1, 100));
