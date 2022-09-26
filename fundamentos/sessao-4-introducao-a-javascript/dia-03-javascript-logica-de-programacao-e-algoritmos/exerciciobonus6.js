/* Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

const numero = 271;
let divisores = 1;

for(let index = 2; index <= numero; index+=1){
    if(numero%index === 0 ) divisores+=1;
    
}

if(divisores === 2){
    console.log("O número "+numero+ " é primo.");
}else console.log("O número "+numero+ " não é primo.");


