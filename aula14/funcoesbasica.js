/*
    FUNÇÕES (BÁSICO)

    funções executam ações

*/

// //parametro: é como se fosse uma variavel, posso enviar dados
// function saudacao(nome){

//     return `Bom dia ${nome}!`;
// }

// // saudacao('Bea'); //chamando a função

// const variavel = saudacao('bea');
// console.log(variavel)

//-------------------------------
// function soma(num1, num2){
//     const resultado = num1+num2;

//     return resultado; //encerra minha função
// }

// console.log(soma(2, 2));
// console.log(soma(3, 1));
// console.log(soma(5, 10));

// const resultado = soma(2,2);
// console.log(resultado)
//-------------------------------

//------------------------------
// function soma (x=1, y=1){
//     const resultado = x+y;
//     return resultado;
// }

// const resultado = soma();
// console.log(resultado);
//---------------------------

//-------------------------------
// const raizquadrada = function (n) {

//     return n ** 0.5;
// }; //nesse caso eu preciso sim do ;

// console.log(raizquadrada(9));
// console.log(raizquadrada(16));
// console.log(raizquadrada(25));

//------------------------------

//------------------------------
// arrow function 
const raizquadrada = n => n ** 0.5; //é uma função simplificada, usar quando se tem apenas uma linha

console.log(raizquadrada(9));
//-----------------------------