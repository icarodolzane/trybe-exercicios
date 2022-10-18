/* 
!Crie duas funções JavaScript com as seguintes especificações:

Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;
A função deverá receber um nome por parâmetro;
Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
Exemplo:

Parâmetro: ‘Bebeto’
Retorno: ‘Tryber Bebeto aqui!’
Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.

*/

const substituaX = (str) => {
    const phrase = 'Trybe x aqui !';
    const phraseReplaced = phrase.replace('x', str);
    return phraseReplaced;
}

/* 
! Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

O nome da função deverá ser minhasSkills;
A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
Declare dentro da função uma variável com o nome skills, do tipo const;
A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills. */

const minhasSkills = (str) => {
    const skills = ['HTML', 'CSS', 'Javascript'];
    let finalPhrase = `${substituaX(str)} Minhas três habilidades principais são: ${skills[0]},${skills[1]} e ${skills[2] }!!!`
    return finalPhrase;
}

console.log(minhasSkills('Icaro'));