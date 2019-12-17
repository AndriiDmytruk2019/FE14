function* fibonacci(num) {
  let a = 0,
      b = 1;
  for (var i = 2; i <= num; i++) {
      console.log (a); 
      [a, b] = [b, a + b]
    }
    yield b; 
}

let valueFib = fibonacci(prompt('Введите число'));
  console.log (valueFib.next().value);