/*
    ARRAY BÁSICO

*/
//  indice         0        1           2
const pessoas = ['Gui', 'Patricia', 'familia'];
// console.log(pessoas[1]);

// pessoas[1] = 'Bea'
// pessoas[3] = 'Patricia'
// console.log(pessoas)
// console.log(pessoas.length)

// pessoas.push('Bea'); //add automaticamente apos o ultimo indice
// pessoas.push('NasaEbeaLove');
// console.log(pessoas);

// pessoas.unshift('bea'); //add no começo
// pessoas.unshift('Nasa')
// console.log(pessoas)

// const removido = pessoas.pop(); //removendo elementos do fim do array
// console.log(removido)
// console.log(pessoas)

// const removido = pessoas.shift(); //remove do começo
// console.log(removido)
// console.log(pessoas)

// delete pessoas[2]
// console.log(pessoas)

// pessoas.push('Bea')
// console.log(pessoas.slice(0, -1)) // -1 corta o ultimo

console.log(typeof pessoas) // array é um objeto
console.log(pessoas instanceof Array) // se é um array