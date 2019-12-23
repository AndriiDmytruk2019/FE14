function guessingGame(num) {

  let number = Number(num),
      counter = 1,
      min = 1,
      max = 100,
      diapazonv,
      randomNumber = getRandom(min, max);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  while (number !== randomNumber) {
    counter++;
    diapazon = number > randomNumber ? `${min}-${number}` : `${number}-${max}`;console.log(diapazon)
    console.log(number); console.log(randomNumber);
    number = +prompt(`Неверное число, попробуйте еще в новом диапазоне ${diapazon}! Попытка № ${counter}`);
  };

  if ( number == randomNumber && counter > 0) {
    alert(`Вы угадали с ${counter} попитки)`)
  } else if (number == randomNumber && counter == 0 ) {
    alert(`Вы сразу угадалы, вы пророк!)`)
  };
};

guessingGame(prompt('Угадай число от 0 до 100'));