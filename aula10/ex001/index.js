const nome = prompt('Digite seu nome completo: ');

// window.document.write('Alguma coisa <br/>')
// // //document.body.innerHTML = 'Outra coisa'
// document.body.innerHTML += 'Incrementando mais textos <br/>'
// document.body.innerHTML += 'Incrementando mais textos <br/>'
// document.body.innerHTML += 'Incrementando mais textos <br/>'

document.body.innerHTML = `O seu nome é: <strong>${nome}</strong><br/>`; //v
document.body.innerHTML += `O seu nome tem letras <strong>${nome.length}</strong> <br/>`; //v
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br/>`; //v
document.body.innerHTML += `Qual o primeiro índice da letra b no seu nome? <strong>${nome.indexOf()}</strong><br/>`; 
document.body.innerHTML += `Qual o último índice da letra s no seu nome? <strong>${nome.lastIndexOf('s')}</strong> <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu são: <strong>${nome.slice(21, 24)}</sstrong>  <br/>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toLocaleUpperCase()}</strong> <br/>`;
document.body.innerHTML += `Seu nome letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong> <br/>`;