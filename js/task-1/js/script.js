function* fibonacci(num) {
  let c = true;

if (c == false) {
	let a = 0,
    	b = 1;
	for (var i = 2; i <= num; i++) {
      console.log (a); 
      [a, b] = [b, a + b];
    }
    console.log (a); 
    yield b; 
    console.log (b); 
} else if (c == true) {
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
		alert(val)
 		console.log (valueFib.next().value);
