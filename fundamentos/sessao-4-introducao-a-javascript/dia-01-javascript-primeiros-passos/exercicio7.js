/* Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

const salarioBruto = 3000;

let aliquotaInss;

let impostoDeRenda;

//condicional para saber a aliquota do desconto de INSS

if (salarioBruto > 5189.82){
    aliquotaInss = 570.88;
} else if(salarioBruto <= 5189.82 && salarioBruto >= 2594.93 ){
    aliquotaInss = salarioBruto * 0.11;
} else if(salarioBruto < 2594.93 && salarioBruto >= 1556.95){
    aliquotaInss = salarioBruto * 0.09;
} else if(salarioBruto < 1556.95){
    aliquotaInss = salarioBruto*0.08;
}

let salarioBase = salarioBruto - aliquotaInss;

//condicional para saber a aliquota do desconto de IR

if (salarioBase > 4664.68){
    impostoDeRenda = (salarioBruto * 0.27) - 869.36;
} else if(salarioBase <= 4664.68 && salarioBase >= 3751.06 ){
    impostoDeRenda = (salarioBase * 0.225) - 636.13;
} else if(salarioBase < 3751.06 && salarioBase >= 2826.66){
    impostoDeRenda = (salarioBase * 0.15) - 354.8;
} else if(salarioBase < 2826.66 && salarioBase >= 1903.99){
    impostoDeRenda = (salarioBase * 0.075) - 142.8;
} else if (salarioBase < 1903.99){
    impostoDeRenda = 0;
}

let salarioLiquido = salarioBase - impostoDeRenda;

console.log("Salário líquido é: " + salarioLiquido);