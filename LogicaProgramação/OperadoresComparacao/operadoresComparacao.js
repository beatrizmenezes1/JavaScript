/*
    OPERADORES DE COMPARAÇÃO

    > maior que
    >= maior que ou igual a
    < menor que
    <= menor que ou igual a

    == igualdade (checa valor) ************
    === igualdade estrita (chega valor e tipo)
    != diferente (checa valor) ************
    !== diferente esstrito (checa valor e tipo)

*/

// // true ou false? 10 é MAIOR que 5? SIM
// console.log(10>5);
// //RESPOSTA: true - sempre vão retornar valor boolean

const maiorQue = 10 > 5;
console.log(maiorQue)

//-----------------------------

const maiorIgual = 10 >= 5;
console.log(maiorIgual);

//-----------------------------

const menorQue = 10 < 11;
console.log(menorQue);

//-----------------------------

const num1 = 10;
const num2 = 11;
const menorIgual = num1 <= num2;
console.log(menorIgual);

//-----------------------------
// NOTA: volta verdadeiro se os dois forem iguais independente do tipo primitivo. Não recomendado usar
const n1 = 10;
const n2 = '10';
const igualdade = n1 == n2;
console.log(igualdade);

//----------------------------
//NOTA: Só retorna verdadeiro se forem iguais e do mesmo tipo primitivo. Recomendado usar
const numero = 10;
const numero2 = '10';
const igualdadeRes = numero === numero2;
console.log(igualdadeRes);

//-----------------------------
//NOTA: volta verdadeiro se os dois forem diferentes independente do tipo primitivo. Não recomendado usar
const numero1 = 10;
const numero12 = '11';
const diferente = numero1 != numero12;
console.log(diferente);

//-----------------------------
//NOTA: Só retorna verdadeiro se forem diferentes e do mesmo tipo primitivo. Recomendado usar
const x = 10;
const y = '10';
const diferenteRes = x !== y;
console.log(diferenteRes);