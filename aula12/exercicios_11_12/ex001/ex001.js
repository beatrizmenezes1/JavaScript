// let num1 = Number(prompt("Digite um número: "));
// let raizQuadrada;
// raizQuadrada = (num1 ** (1/2));

// document.body.innerHTML = (`Seu número é: ${num1} </br>`);

// document.body.innerHTML += (`Raiz Quadrada: ${raizQuadrada} </br>`);
// document.body.innerHTML += (`${num1} é interio: ${Number.isInteger(num1)} </br>`);
// document.body.innerHTML += (`É NaN: ${Number.isNaN(num1)} </br>`);
// document.body.innerHTML += (`Arredondado para baixo: ${Math.floor(num1)} </br>`);
// document.body.innerHTML += (`Arredondado para cima: ${Math.ceil(num1)} </br>`);
// document.body.innerHTML += (`Com duas casas decimais: ${num1.toFixed(2)}`);

const numero = Number(prompt("Digite um numero: "));
const numeroTitulo = document.getElementById('numero-titulo');
const numeroTexto = document.getElementById('texto');

let raizQuadrada;
raizQuadrada = (numero ** (1/2));

numeroTitulo.innerHTML = numero;
texto.innerHTML = " "; //para limpar
texto.innerHTML = `<p> Raiz Quadrada: ${raizQuadrada}. </p>`
texto.innerHTML += `<p> ${numero} é interio: ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)} </p>` 
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}</p>`     
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`   



          

