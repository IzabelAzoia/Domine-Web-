console.log('troca das variaveis');

let a = 7;
let b = 94;

let temporaria = a;
a = b;
b = temporaria;
 [a, b] = [b, a] //outraa forma de fazer a mesma coisa

// depois da traca... a = 94 e b = 7

console.log(a);
console.log(b);

