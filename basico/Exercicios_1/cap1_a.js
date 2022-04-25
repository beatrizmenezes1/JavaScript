/*
    informe um numero e mostre apenas o posterior e o anterior

*/

let numero1 = Number(prompt("Informe um número: "));
let anterior;
let posterior;

console.log(numero1);
anterior = numero1 - 1;
posterior = numero1 + 1;

alert(`Número anterior é ${anterior} e o posterior é ${posterior}`);