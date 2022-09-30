/*
     Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
     - document.getElementById()
     - document.getElementsByClassName()
     - document.getElementsByTagName()
     1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) OK
     2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). OK
     3. Crie e execute uma função que mude a cor do quadrado vermelho para branco. OK
     4. Crie e execute uma função que corrija o texto da tag <h1>. OK 
     5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo. OK
     6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
     */

const newParagraph = document.getElementById('meInTheFuture');

changeText(newParagraph, 'Ganhando rios de dinheiro, estabilidade financeira e no emprego dos sonhos...');

const mainContainer = document.getElementsByClassName('main-content');
changeMainColor(mainContainer, 'rgb(76,164,109)');

const centerContent = document.getElementsByClassName('center-content');
changeCenterContent(centerContent, 'white');

const title = document.getElementsByClassName('title')[0];
changeText(title, 'Exercício - Javascript - D.O.M');

const firstTagP = document.querySelector('p');

firstTagP.style.marginLeft = '2%';

changeText(firstTagP, 'Como você se vê daqui a 2 anos? ');
toUpperCase(firstTagP);

const trybeParagraph = document.querySelectorAll('p')[2].style.marginLeft = '1%';

const tagPValues = document.querySelectorAll('p');

printIntheConsole(tagPValues);

function changeText(element, str) {
    element.innerText = str;
    return;
}

function changeMainColor(element, color){
    element[0].style.backgroundColor = color;
    return;
}

function changeCenterContent(element, color){
    element[0].style.backgroundColor = color;
    return;
}

function toUpperCase(element){
    element.style.textTransform = 'uppercase';
}

function printIntheConsole (element){
    
    for(let index = 0; index < element.length; index += 1){
        console.log(element[index]);
    }

    return; 
}


