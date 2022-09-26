/* Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
***** */

let stringDeAsteriscos = '';
let asterisco = '*';
let n = 10;

for(let index = 0; index < n; index+=1){
   stringDeAsteriscos = stringDeAsteriscos + asterisco;
   console.log(stringDeAsteriscos);
}

