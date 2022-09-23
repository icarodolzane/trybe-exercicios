/* Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. */


let maiorPrimo;

for (let index =2 ; index <= 50; index+=1){
    if(index%2 != 0 && index%3 != 0 && index%5 != 0 && index%7 != 0){
       /* console.log(index); */
        maiorPrimo = index;
    }
}

console.log("O maior primo entre 2 e 50 é o número: "+maiorPrimo); 