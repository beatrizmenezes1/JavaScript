/*

    valor de a tenha o valor de b
    valor de b tenha o valor de c
    valor de c tenha o valor de a

*/

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A


const valorA = varA
varA = varB; // quem tem o b agora é o varB
varB = varC
varC = valorA

console.log(varA, varB, varC)