function getRandom() {
  return Math.floor(Math.random() * (1 - 1 + 1)) + 1;
  };

function guessingGame(num) {

  let randomNumber = getRandom(),
      number = Number(num),
      counter = 0;

  while (number !== randomNumber) {
    console.log(number); console.log(randomNumber);console.log(counter);
    number = +prompt('Неверное число, попробуйте еще в диапазоне')
    counter++;
  }

  if ( number == randomNumber && counter > 0) {
    alert(`Вы угадали с ${counter} попитки)`)
  } else if (number == randomNumber && counter == 0 ) {
    alert(`Вы сразу угадалы, вы пророк!)`)
  }
};

guessingGame(prompt('Угадай число от 0 до 100'));