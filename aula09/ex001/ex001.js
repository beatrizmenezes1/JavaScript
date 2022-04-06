
let nomeUsuario = prompt("Qual seu nome? ");
let anoAtual = prompt("Ano Atual: ");
let anoNascimento = prompt("Em que ano você nasceu? ");

console.log(anoAtual, anoNascimento);

anoAtual = Number(anoAtual);
anoNascimento = Number(anoNascimento);

let idade = (anoAtual-anoNascimento);
console.log(idade);

alert(`Olá ${nomeUsuario} de ${idade} anos, fique a vontade!`);