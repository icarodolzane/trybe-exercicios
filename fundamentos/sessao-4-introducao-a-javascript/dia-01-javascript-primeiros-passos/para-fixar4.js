/* Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.
Utilizando if/else, implemente condicionais para que:
Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.
Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.
Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :). */

const weekDay = "domingo";

if(weekDay === "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else{
    console.log("FINALMENTE, descanso merecido UwU");
}

