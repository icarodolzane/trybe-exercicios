/* Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados. */

function maiorNumero (a, b){
    if(a>b){
        return a;
    }else return b;
}

/* Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. */

function maiorDeTresNumeros (a,b,c){

    if(a>b && a > c){
        return a;
    }else if(b>a && b > c){
        return b;
    }else return c;
}



/* Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */

function informaSeNegativoOuPositivo (valor){
    if (valor > 0){
        return console.log("positive");
    } else if (valor < 0 ){
        return console.log("negative");
    } else {
        return console.log("zero");
    }
}


/*Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.*/

function validaTriangulo (ang1, ang2, ang3){
    if(ang1 <= 0 || ang2 <= 0 || ang3 <=0)
        return console.log("Erro!!! Ângulo inválido.");
    else 
    sum = ang1+ang2+ang3;
    if(sum = 180){
        return console.log(true);
    }else{
        false
    }
}



 



