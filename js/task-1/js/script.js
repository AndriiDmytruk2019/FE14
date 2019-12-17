let c = prompt('Введите true для порядка вперёд и false - назад!');

function* fibonacci(num) {

if (c == 'true') {
	let a = 0,
    	b = 1;

	for (var i = 2; i <= num; i++) {
      console.log (a); 
      [a, b] = [b, a + b];
    }
    console.log (a); 
    yield b; 
    console.log (b); 
} else if (c == 'false') {
	let a = 0,
    	b = 1;

	for (var i = 2; i <= num; i++) {
      console.log (a); 
      [a, b] = [b, a - b];
    }
    console.log (a); 
    yield b; 
    console.log (b); 
	}
}

let valueFib = fibonacci(prompt('Введите число'));
let val = valueFib.next().value;
	alert('Твое число ' + val +'!' + '  Заглини в консоль :)')
	console.log (valueFib.next().value);

