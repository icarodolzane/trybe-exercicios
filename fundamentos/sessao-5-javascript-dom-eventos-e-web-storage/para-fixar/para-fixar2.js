/* Adicione uma classe igual para os dois parágrafos; OK
Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
Altere algum estilo do primeiro deles;
Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName. */

const title = document.getElementById("page-title").innerText = 'Beautiful Day';
const titulo = document.getElementsByTagName("h2")[0].style.color='red';
console.log(titulo);
const paragrafo = document.getElementsByClassName('paragrafo')[0].innerText = "It's a beautiful day Sky falls, you feel like It's a beautiful day,  Don't let it get away";


const subTitle = document.getElementById("subtitle").innerText = "With or Without you";
const subtitulo = document.getElementsByTagName("h4")[0].style.color = "red";


const paragrafo2 = document.getElementsByClassName('paragrafo')[1].innerText = "With or without you, With or without you, ah, ah I can't live With or without you";



