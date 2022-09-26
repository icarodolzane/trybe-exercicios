/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Copiar
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******  */


let asterisco = '*';
let espaçoVazio = ' ';
let n = 11;
let meioDaPiramide = (n+1)/2;
let esquerdaPiramide = meioDaPiramide;
let direitaPiramide = meioDaPiramide;

for(let index = 1; index <= meioDaPiramide; index+=1){
    let stringDeAsteriscos = '';
    for(let index2 = 1; index2 <= n; index2+=1){
        if(index2 === esquerdaPiramide || index2 === direitaPiramide || index === meioDaPiramide){
            stringDeAsteriscos = stringDeAsteriscos + asterisco;
        }else{
            stringDeAsteriscos = stringDeAsteriscos + espaçoVazio;
        }
    
    }
    
    direitaPiramide -=1;
    esquerdaPiramide+=1;
    console.log(stringDeAsteriscos);
}

