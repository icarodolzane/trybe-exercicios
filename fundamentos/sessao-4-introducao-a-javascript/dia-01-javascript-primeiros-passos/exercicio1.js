/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
 */

const a = 3;
const b = 3;
const c = 3;
/* Adicção */

let adicao = a + b;

// Subtração //

let subtracao = a - b;

//// Multiplicação

let multiplicacao = a * b;

// Divisão //

let divisao = a / b; 

//Módulo

let modulo = a%b; 

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

/* Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
 */

let retornaMaior;

if(a > b){
    retornaMaior = a;
}else if(b > a){
    retornaMaior = b;
}else{
    retornaMaior = "Os números são iguais."
}

console.log("Maior dos dois números é:" + " " + retornaMaior);

/* Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. */

if(a > b && a > c){
    retornaMaior = a;
}else if(b > a && b > c){
    retornaMaior = b;
}else if (c > a && c > b){
    retornaMaior = c;
}else {
    retornaMaior = "Os números são iguais."
}

console.log("Maior dos três números é:" + " " + retornaMaior);

/* Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */

const number = 0;

let resultado = "";

if (number > 0){
    resultado = "positive";
} else if (number < 0){
    resultado = "negative"
} else{
    resultado = "zero";
}

console.log("O número é: " +resultado);


