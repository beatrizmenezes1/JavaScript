const hora = 13;

if (hora < 12){
    console.log('bom dia');
} else{
    console.log('boa tarde');
}

/*
    entre 0 - 11 - bom dia
    entre 12 - 17 - boa tarde
    entre 18 - 23 - boa noite
*/

console.log('------------------------')

const hora1 = 50
if (hora1 >= 0 && hora1 <= 11){
    console.log('Bom dia Bea');
} else if (hora1 >= 12 && hora1 <= 17){
    console.log('Boa tarde bea');
} else if (hora1 >= 18 && hora1 <= 23){
    console.log('boa noite bea')
} else {
    console.log('Hora inválida, mas tenha um ótimo dia/tarde/noite')
}

/*
    IF pode ser usado sozinho,
    Sempre que utilizo a palavra else, preciso de um IF antes
    Eu posso ter vários else if na condição/checagem
    Eu só posso ter um ELSE por ultimo na checagem
*/