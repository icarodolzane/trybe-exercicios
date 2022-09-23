/* O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Copiar
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. */

const valorNumero = 10;
let fatorial = 1;

for(let index = 1; index <= valorNumero; index+=1){
    fatorial = fatorial * index;
}

console.log("O fatorial de "+valorNumero+" é igual a: "+fatorial);

