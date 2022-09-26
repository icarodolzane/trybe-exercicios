/* Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo: */

/* n = 5

*****
*****
*****
*****
***** */


let stringDeAsteriscos = '';
let asterisco = '*';
let n = 10;

for(let index = 0; index < n; index+=1){
   stringDeAsteriscos = stringDeAsteriscos + asterisco;
   
}

for(let index = 0; index < n; index+=1){
    console.log(stringDeAsteriscos);
 }



