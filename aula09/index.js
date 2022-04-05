/*

    Diferença de var e let

*/

//ECMAScript 2015 - padronização do js (ES6)
//No let isso causaria um erro
//Com var pode redeclarar a variavel 

var nome = "bea";
var nome = "gui";

console.log(nome);

nomeTeste = "bea"; // NAO FAÇA DESSA FORMA, UMA VAR GLOBAL, POIS ISSO PODE AFETAR OUTRAS VARIAVEIS DO SISTEMA 
console.log(nomeTeste)

let sobrenome = "Lamounier" 