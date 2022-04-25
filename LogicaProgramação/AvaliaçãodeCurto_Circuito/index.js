/*

&& -> false && true == false "o valor msm"
|| -> false && true == true

Nota: QUALQUER COISA != DESSAS COISAS ABAIXO, É AVALIADO EM TRUE
FALSY
* false - falso literal, os outros podem ser avaliados em falso
0
' ' 
" "
` `
null / undefined
NaN

*/

console.log('Bea' && NaN && 'Gui');

function falaOI(){
    return 'Oi';
}

//vai acontecer o curto-circuito
const vaiexecutar = 'bea'; //é direfente dos valores falsos acima, true e executa a função
console.log("usando o &&: "+vaiexecutar && falaOI());


//Nota: o OR precisa de apenas 1 para ser verdadeira, retorna bea por ser a primeira sentença verdadeira
//se não houver sentença verdadeira, retorna a ultima falsa
console.log(0 || false || null || 'bea' || true);

//const corUsuario = null;
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
