function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert(1)
    //     console.log('Foi enviado')
    // };
    
    //             ou
    
    function recebeEventoForm (evento){
        evento.preventDefault(); //nesse evento vc previne oq er apra acontencer por padrao
        
        //pega as variaveis do formulario
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // // paara ver o valor, é só por o .value
        // console.log(nome.value, sobrenome.value, peso, altura)

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
           
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} </br> ${peso.value} ${altura.value}</p>`;


    }

    //add um escutador de evento no formulario
    form.addEventListener('submit', recebeEventoForm);
   
}


meuEscopo();