/*

    Mais sobre strings

       indices     01234567
    let umTexto = "Um texto";

    console.log(umTexto[4]); - pega o elemento do índice 4
    console.log(umTexto.charAt(6)); pega o elemento do índice 6
    obs: AMBOS FAZEM A MESMA COISA

    -----------------------------------------------------------------

    Concatenação

    console.log(umString.concat('em um lindo dia.')); nota: nunca vou usar dessa forma
    console.log(umString+ "em um lindo dia."); nota: talvez
    console.log(`${umString} em um lindo dia`); nota: templete string melhor forma sz

    -----------------------------------------------------------------

    Saber o índice da palavra

    console.log(umString.indexOf('texto')); - encontra a primeria letra da palavra que eu solicitei
    console.log(umString.indexOf('Um', 3)); - procura a palavra Um a partir do índice 3
    console.log(umString.lastIndexOf('o')); - procura a palabvra detrás pra frente e eu posso colocar o índice tbm

    -------------------------------------------------------------------

    Expressão regular

    console.log(umString.match(/[a-z]/g)); nota: ainda não sei o que faz, encontra uma array 
    console.log(umString.search(/x/)); - procura letra mas tbm aceita expressão regular
    console.log(umString.replace('Um', 'Outro')); - troca a palavra Um por Outro

    let umString = "O rato roeu a roupa do rei de Roma";
    console.log(umString.replace(/r/g, '#')); substitui todos os R por # globalmente;
    O #ato #oeu a #oupa do #ei de #oma

    -------------------------------------------------------------------

    Tamanho das strings

    console.log(umString.length); - ver o tamannho total da string
    console.log(umString.slice(2, 6)); - começa do 2 e termina no 6 = tex
                 01234567
    let texto = "um texto"
    console.log(texto.slice(2, 6));

    OBS: QUANDO SE USA NUMERO NEGATICO COMO START, É O TAMANHO TOTAL MENOS O VALOR NEGATIVO

    --------------------------------------------------------------------

    Dividir strings

    console.log(umString.split(' ')); - pode determinar a separação e pode tbm por limite

    ---------------------------------------------------------------------

    MAIÚSCULO e minúsculo

    console.log(umString.toUpperCase()); - DEIXA LETRAS MAIÚSCULAS
    console.log(umString.toLowerCase()); - deixa letras minúsculas.
*/