const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const inputN1 = evento.target.querySelector('.n1');
    const inputN2 = evento.target.querySelector('.n2');
    const inputOperacao = evento.target.querySelector('.operacao');
    const resultado = document.querySelector('#resultado');

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const operacao = Number(inputOperacao.value);
    
    // declaração de funções
    const getSoma = somaNumeros(n1,n2);
    const getSub = subNumeros(n1,n2);
    const getMult = multNumeros(n1,n2);
    const getDivi = diviNumeros(n1,n2);

    console.log(`Número1: ${n1} | Número: ${n2} | Operação: ${operacao}`);

    if (operacao == 1) {
        resultado.innerHTML=`<p><strong>RESULTADO: ${getSoma}</strong></p>`;
        console.log(getSoma);
    } else if (operacao == 2) {
        resultado.innerHTML=`<p><strong>RESULTADO: ${getSub}</strong></p>`;
        console.log(getSub);
    } else if (operacao == 3) {
        resultado.innerHTML=`<p><strong>RESULTADO: ${getMult}</strong></p>`;
        console.log(getMult)
    } else if (operacao == 4) {
        resultado.innerHTML=`<p><strong>RESULTADO: ${getDivi}</strong></p>`;
        console.log(getDivi);
    } else {
        console.log('Operação Inválida');
    }

})

function somaNumeros(n1, n2){
    let resultado;
    resultado = (n1+n2);

    return resultado;
}

function subNumeros(n1, n2){
    let resultado;
    resultado = (n1-n2);
    return resultado;
}

function multNumeros(n1, n2){
    let resultado;
    resultado = (n1*n2);
    return resultado;
}

function diviNumeros(n1, n2){
    let resultado;
    resultado = (n1/n2);
    return resultado;
}








