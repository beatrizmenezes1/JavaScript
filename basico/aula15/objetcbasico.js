/*
    OBJETC

    //  const array = [1,2,3];

*/

// //criando um obejto
// const pessoa_1 = {
//     nome: 'Bea',
//     sobrenome: 'Lamounier',
//     idade: 21

// };

// console.log(pessoa_1.nome);
// console.log(pessoa_1.sobrenome);
// console.log(pessoa_1.idade);

//---------------------------------------------------------------------------
// // função Factory - cria coisas
// function criaPessoa (nome, sobrenome, idade){

//     return{ nome, sobrenome, idade};
   
// }

// // parametro: é um local onde sera guardado um valor (na criação da função)
// // argumento: quando eu envio um valor para o parametro (quando a função é chamada)
// const pessoa_1 = criaPessoa('Bea', 'Lamounier', '21');
//-----------------------------------------------------------------------------

const pessoa_1 = {
    nome: 'bea',
    sobrenome: 'Lamounier',
    idade: 21,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa_1.fala();
pessoa_1.incrementaIdade();
pessoa_1.fala();