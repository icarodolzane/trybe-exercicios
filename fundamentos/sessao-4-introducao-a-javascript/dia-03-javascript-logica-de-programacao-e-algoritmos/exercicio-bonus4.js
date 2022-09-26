/* Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
*****     */

let stringDeAsteriscos = '';
let asterisco = '*';
let espaçoVazio = ' ';
let n = 5;
let meioDaPiramide = (n+1)/2;
let esquerdaPiramide = meioDaPiramide;
let direitaPiramide = meioDaPiramide;

for(let index = 0; index <= meioDaPiramide; index+=1){

    for(let index2 = 0; index2 <= n; index2+=1){
        if(index2 > esquerdaPiramide && index2 < direitaPiramide){
            stringDeAsteriscos = stringDeAsteriscos + asterisco
        }else{
            stringDeAsteriscos = stringDeAsteriscos + espaçoVazio;
        }
    
    }
    console.log(stringDeAsteriscos);
    stringDeAsteriscos = '';
    direitaPiramide +=1;
    esquerdaPiramide-=1;
}

