/*
    OPERADORES LÓGICOS

    && -> AND -> E - as duas sentenças precisam ser verdadeiras para retornar verdadeiro
    || -> OR -> OU - se uma for verdadeira, entt retorna verdadeiro o resultado
    ! -> NOT -> NÃO 

*/

console.log(true && true);
console.log(true || false);

const usuario = 'bea';
const senha = '2624';

//                      true       &&        true
const vaiLogar = usuario === 'bea' && senha === '2624';
console.log("Login esta correto: "+vaiLogar);

console.log(!false); //inverte o valor, false fica true, isso é negação
console.log(!!false);// inverte e inverte de novo, entt o false fica false msm kk wtf