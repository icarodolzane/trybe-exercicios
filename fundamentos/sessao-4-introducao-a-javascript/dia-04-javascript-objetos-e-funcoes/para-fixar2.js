/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function adicao(a, b){
    return a + b;
}

function subtracao (a, b){
    return a - b;
}

function multiplicacao (a, b){
    return a * b;
}

function divisao (a, b){
    if (a!=0){
        return a / b;
    }else console.log("Informe um dividendo diferente de zero.");
}

function modulo (a, b){
    return a%b;
}

// teste calculadora

console.log(adicao(2,3));
console.log(subtracao(2,3));
console.log(multiplicacao(2,3));
console.log(divisao(4,2));
console.log(modulo(4,2));

