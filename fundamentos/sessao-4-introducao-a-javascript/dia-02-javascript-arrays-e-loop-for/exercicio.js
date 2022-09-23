/* let numbers = [6, 10, 2, 20, 70, 8, 100, 22, 36, 28]; */
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */

for(let index = 0; index < numbers.length; index+=1){
    console.log(numbers[index]);
}

/* Some todos os valores contidos no array e imprima o resultado; */
let soma=0;

for(let index = 0; index < numbers.length; index+=1){
    soma = soma + numbers[index];    
}

console.log(soma);

/* Calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. */

let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);

/* Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */

for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index] > 20){
        console.log("Valor maior que 20.");
    } else console.log("Valor menor que 20.");
}

/* Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let maiorValor=0;

for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}

console.log("Maior número é: "+maiorValor);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */

let contaImpar=0;


for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index]%2 != 0){
        contaImpar = contaImpar + 1;
    }
}

if(contaImpar === 0){
    console.log("Nenhum valor ímpar encontrado.");
}else{
    console.log("Há "+contaImpar+" números ímpares no Array!");
}

/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */
let menorValor=numbers[0];

for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}

console.log("Menor número é: "+menorValor);

