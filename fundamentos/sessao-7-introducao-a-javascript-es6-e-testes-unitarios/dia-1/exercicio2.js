/* 
!Crie uma função que retorne um array em ordem crescente.

*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {

    for (let i =0; i  < array.length - 1; i +=1) {
        for (let index = 0; index < array.length; index += 1) {
            let swap = 0;
            if(array[index] > array[index + 1]){
                swap = array[index];
                array[index] = array[index +1];
                array[index + 1] = swap;
            }
        }
        
    }

    return array.toString();

}
// Seu código aqui.



/* 
Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números. */

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);