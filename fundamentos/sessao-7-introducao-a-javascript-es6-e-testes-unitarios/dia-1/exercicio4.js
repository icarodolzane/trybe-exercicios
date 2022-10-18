/* 
todo -Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
*/

/* 
?? longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
*/

const longestWord = (string) => {
    const wordArray = string.split(' ');
    let maxValue = 0;
    let theLongestWord = '';

    for (const word of wordArray) {
        if(word.length > maxValue){
            maxValue = word.length;
            theLongestWord = word;
        }
    }
    return theLongestWord;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));