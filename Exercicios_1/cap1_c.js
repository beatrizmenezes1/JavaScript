let preco = Number(prompt("Preço: "));
let descontoVista;
let aVista;
let valor3x;

descontoVista = 0.1 * preco;
aVista = preco - descontoVista;
valor3x = preco/3;

confirm(`Preço: ${preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}.\n A vista: ${aVista.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} ou 3x de ${valor3x.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}.`);
