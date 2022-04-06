/*
    OPERADORES ARITMÉTICOS, de atribuição e incremento

*/

/* 
    Aritméticos 
    +  Adição e Concatenação
    -  subtracao
    *  multiplicacao
    /  divisao
    ** potenciação
    %  Resto da divisao

*/

/* 
   Ordem do mais forte ate o mais fraco

   () , ** , * , / , % , + , -
    
*/

/* 
    INCREMENTO: ++
    DECREMENTO: --
    
*/

const num1 = 5
const num2 = 10
console.log(num1+num2)

const num3 = "5"
const num4 = 10
console.log(num3+num4)

console.log()
let contador = 1;
contador ++; //2
contador ++; //3
++contador; //4
++contador; //5
console.log(contador);

console.log()
let contador1 = 1;
console.log(contador1++)
console.log(contador1)

console.log()
let contador2 = 1;
console.log(--contador2);

let cont = 2;
cont *= 2; // cont = cont + 2 isso serve para todas as operações
console.log(cont);


//parseInt, parseFloat, Number
const numero = 10;
const numero2 = parseInt('5'); //converter a string para um numero
//const numero2 = Number('5');
console.log(numero + numero2);
console.log(typeof numero2)