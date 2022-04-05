/*

    Exercício de constantes 001

    Escrever:

    Beatriz Menezes tem 21 anos e pesa 50 kg
    tem 1.57 m de altura e seu IMC é de 15.432098765432098
    Beatriz nasceu em 2001


*/

const nome = "Beatriz"
const sobrenome = "Menezes"
const idade = 21;
const peso = "50"
const alturaEmM = 1.57
 
let imc; // peso / (altura*altura)
let anoNascimento; // 2022 - 21

imc = peso/(alturaEmM*alturaEmM);
anoNascimento = 2022-idade;

// separação por virgula
console.log(nome,sobrenome,"tem",idade,"anos e pesa",peso,"kg")
console.log("tem",alturaEmM,"m de altura e seu IMC é de",imc)
console.log(nome,"nasceu em",anoNascimento)

// separação por sinal de +
console.log()
console.log(nome+ " " + sobrenome+" tem "+idade+" anos e pesa "+peso+"kg.")
console.log("tem "+alturaEmM+"m de altura e seu IMC é de "+imc)
console.log(nome+" nasceu em "+anoNascimento)

// separação usando ${} com crase - maneira mais adequada de formatação
console.log()
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg.`)
console.log(`tem ${alturaEmM}m de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)