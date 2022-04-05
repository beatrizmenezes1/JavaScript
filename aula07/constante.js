/*
    #REGRAS PARA CONSTANTES

    -- Não podemos criar variáveis com palavras reservadas
    -- Variáveis precisam ter nomes significativos
    -- Não pode começar o nome de uma variável com um número
    -- Não podem conter espaços ou traços
    -- utilizamos camelCase
    -- Case-sensitive
    -- Nâo podemos redeclarar variáveis com let
    -- Não pode modificar o valor de uma constante
    -- Não utilize VAR utilize CONST.

    String = texto
    Number = número

*/

const nome1 = "bea";
console.log(nome1)

let nome = "bea";
nome = "nasa";
console.log("e",nome);

const primeiroNumero = 10; // Number
const segundoNumero = 5; 

const resultado_1 = primeiroNumero + segundoNumero;
const resultado_2 = primeiroNumero - segundoNumero;
const resultado_3 = primeiroNumero * segundoNumero;
const resutado_4 = primeiroNumero / segundoNumero;
const resultadoDuplicado = resultado_1 * 2;
const resultadoTriplicado = resultadoDuplicado * 3;

console.log("Soma:", resultado_1);
console.log("Subtração:", resultado_2);
console.log("Multiplicação:", resultado_3);
console.log("Divisão:", resutado_4);
console.log("Duplicado da soma:",resultadoDuplicado);
console.log("TRIPLICADO:",resultadoTriplicado);

console.log(typeof primeiroNumero); //para saber o tipo da variável
console.log(typeof nome1)
console.log(typeof(primeiroNumero+segundoNumero))