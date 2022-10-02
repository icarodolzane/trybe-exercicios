//globals

const getBody = document.getElementsByTagName('body')[0];
let itemList = document.createElement('li');

// functions
function createTitle (){
    
    const createH1 = document.createElement('h1');
    createH1.innerText='Exercício - JavaScript DOM';
    getBody.appendChild(createH1);
    createH1.className = 'title';
};

function createMain (){
    const createMain = document.createElement('main');
    createMain.className = 'main-content';
    createMain.style.border='1px solid black';
    getBody.appendChild(createMain);
    
};

function createSection(someClassName){
    const createSection = document.createElement('section');
    getBody.childNodes[3].appendChild(createSection);
    createSection.className = someClassName;
    createSection.style.border='1px solid black';
};

function createParagraph(string){
    const createsParagraph = document.createElement('p');
    createsParagraph.innerText = string;
    document.getElementsByTagName('section')[0].appendChild(createsParagraph);
    
    return;
}

function createImage (link, someClassName){
    const someImg = document.createElement('img');
    someImg.src = link;
    document.getElementsByClassName('left-content')[0].appendChild(someImg);
    someImg.className = someClassName;

    return;

};

function createUnorderedList(){
    const someUl = document.createElement('ul');
    document.getElementsByClassName('right-content')[0].appendChild(someUl);

    let numbersExt = {
        1: 'um',
        2: 'dois',
        3: 'três',
        4: 'quatro',
        5: 'cinco',
        6: 'seis',
        7: 'sete',
        8: 'oito',
        9: 'nove',
        10: 'dez',
      }; 
        for (let number in numbersExt){
            
            let itemList = document.createElement('li');
            itemList.innerText = numbersExt[number];
            document.querySelector('.right-content').appendChild(itemList);
        };        
     

}

function createH3(string){
    const someH3 = document.createElement('h3');
    document.getElementsByTagName('main')[0].appendChild(someH3);
    someH3.innerText = string;
    someH3.className = 'description';
    return;
};

function removeElement(){
    const removeSectionLeft = document.getElementsByClassName('left-content')[0];
    const getMain = document.getElementsByClassName('main-content')[0];
    getMain.removeChild(removeSectionLeft);

    return;
};

function getElementToCenter(){
    const getSectionLeft = document.getElementsByClassName('right-content')[0];
    getSectionLeft.style.marginRight = 'auto';

    return;

};

function changeBackGroundColor(){
    const getCenterSection = document.getElementsByClassName('center-content')[0];
    getCenterSection.parentElement.style.backgroundColor = 'green';
};

function removeItemsList(){
    const getList = document.getElementsByTagName('li');
    getList[9].remove();
    getList[8].remove();
}

//functions-calls
createTitle ();
createMain ();
createSection('center-content');
createParagraph("Is there a time for keeping your distance A time to turn your eyes away Is there a time for keeping your head down For getting on with your day");
createSection('left-content');
createSection('right-content');
createImage('https://picsum.photos/200', 'small-image');
createUnorderedList();
createH3("Eu não aguento mais kkkk");
createH3("Mas eu preciso muito de um bom emprego que me dê dinheiro kkkk");
createH3("Eu não nasci herdeiro!!!");
removeElement();
getElementToCenter();
changeBackGroundColor();
removeItemsList();


 


