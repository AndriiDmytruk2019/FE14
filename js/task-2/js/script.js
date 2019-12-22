function getRandom() {
  return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  };

function guessingGame(num) {
  let randomNumber = getRandom(),
      number = Number(num);

  if ( number == randomNumber) {
    console.log('yes')
  } 

  while (number !== randomNumber) {
    console.log(number); console.log(randomNumber);
    number = +prompt('Неверное число, попробуйте еще в диапазоне')
  }
};

guessingGame(prompt('Угадай число от 0 до 100'));