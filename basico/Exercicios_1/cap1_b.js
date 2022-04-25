let valorTotal = Number(prompt("Digite o valor total da conta: "));
let totalCliente = Number(prompt("Informe o número total de clientes que vão pagar: "));
let resultado;

resultado = (valorTotal/totalCliente);

alert(`Valor Total: ${valorTotal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}. Número de Clientes: ${totalCliente}. Valor por Cliente:  ${resultado.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);

