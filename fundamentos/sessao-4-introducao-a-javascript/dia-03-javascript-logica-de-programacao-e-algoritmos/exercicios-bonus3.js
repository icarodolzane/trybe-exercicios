/* Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também. */

let stringDeAsteriscos = ' ';
let asterisco = '*';
let espaçoVazio = ' ';
let n = 10;
let marcaPosicao = n -1;

for(let index = 0; index < n; index+=1){

    for(let index2 = 0; index2 < n; index2+=1){
        if(index2 < marcaPosicao){
            stringDeAsteriscos = stringDeAsteriscos + espaçoVazio;
        }else{
            stringDeAsteriscos = stringDeAsteriscos + asterisco
        }
    
    }
    console.log(stringDeAsteriscos);
    stringDeAsteriscos = ' ';
    marcaPosicao -=1; 
}





