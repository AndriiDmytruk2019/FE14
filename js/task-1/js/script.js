function* fibonacci(num) {
  let a = 0,
      b = 1,
      c = yield;
  if (c == 'true') {
    for (var i = 2; i <= num; i++) {
      console.log (a); 
      [a, b] = [b, a + b];
    }
    // yield b; 
    console.log (b);
    alert('Твое число ' + b +'!' + '  Заглини в консоль :)');
} else if (c == 'false') {
    for (var i = 2; i <= num; i++) {
      console.log (a); 
      [a, b] = [b, a - b];
    }
    // yield b; 
    console.log (b);
    alert('Твое число ' + b +'!' + '  Заглини в консоль :)');
  };
};


let valueFib = fibonacci(prompt('Введите число'));
let guestion = prompt('Введите true для порядка вперёд и false - назад!'); 
    console.log(valueFib.next(guestion));
    console.log(valueFib.next(guestion));


/*function* fibonacci(num) {
    let a = 0,
        b = 1,
        c = yield;
if (c == undefined) {
	for (var i = 2; i <= num; i++) {yield b;
      console.log (a); 
      [a, b] = [b, a + b];
    }
    console.log (a); 
    console.log (b); 
} else if (c == true) {
	for (var i = 2; i <= num; i++) {
      console.log (a); 
      [a, b] = [b, a - b];
    }
    console.log (a); 
    console.log (b); 
	}
};

// let c = prompt('Введите true для порядка вперёд и false - назад!');
let valueFib = fibonacci(prompt('Введите число'));
// let val = valueFib.next().value;
  // valueFib.next(prompt('Введите'));
// 	alert('Твое число ' + val +'!' + '  Заглини в консоль :)')
*/
