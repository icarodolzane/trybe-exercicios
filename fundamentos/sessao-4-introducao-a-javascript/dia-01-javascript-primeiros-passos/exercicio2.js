/* 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

const angulo1 = 150;
const angulo2 = 15;
const angulo3 = 15;

let sum;
let triangulo;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    sum = angulo1 + angulo2 + angulo3;
}else{
    console.log("Informe um ângulo válido!");
}

if(sum === 180){
    triangulo = true;
}else{
    triangulo = false;
}

if(triangulo){
    console.log("É um triângulo.");
}else{
    console.log("Não é um triângulo.");
}