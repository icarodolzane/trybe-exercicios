/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara

verificaPalindrome('arara')

Retorno esperado: true
verificaPalindrome('desenvolvimento')

Retorno esperado: false */

const str = 'ICARO'; 

function verificaPalindrome(stringDeEntrada){
    const stringReverse = stringDeEntrada.reverse();
    if(stringDeEntrada === stringReverse){
        return true;
    }else false; 
}

if(verificaPalindrome(str) === true){
    console.log("A paravra " + str + " é um palíndromo!" );
}