//globals
let decemberDaysList = [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const getFriday = document.querySelectorAll('.week-days li')[5];

//functions

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}
createDaysOfTheWeek();


function createLiDays() {
    let getDaysList = document.querySelector('#days');
    
    for (let i = 0; i < 4; i += 1) {
        let day = decemberDaysList[i];
        let dayItem = document.createElement('li');
        dayItem.innerText = day;
        dayItem.className = 'day';
        getDaysList.appendChild(dayItem);
    }

    for (let i = 4; i < decemberDaysList.length; i += 1) {
        let day = decemberDaysList[i];
        let dayItem = document.createElement('li');
        dayItem.innerText = day;
    
    
    if( day === 24 ||day === 25 || day === 31){
        dayItem.className = 'day holiday';
        getDaysList.appendChild(dayItem);
    }else if(day === 2 || day === 9 || day === 2 || day === 16 || day === 23 || day === 30){
        dayItem.className = 'day friday';
        getDaysList.appendChild(dayItem);
    }else{
        dayItem.className = 'day';
        getDaysList.appendChild(dayItem);
    }
    }
    
}

createLiDays();

function addButton(buttonName) {
    let buttonCntr = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-holiday'
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    buttonCntr.appendChild(newButton);    
}
addButton('Feriados');

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';

    getHolidayButton.addEventListener('click', function(){
        for(let i = 0; i < getHolidays.length; i+=1){
            if(getHolidays[i].style.backgroundColor === setNewColor){
                getHolidays[i].style.backgroundColor = backgroundColor;
            }else{
                getHolidays[i].style.backgroundColor = setNewColor;
            }
        }
    });
}

displayHolidays();

function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
  }

   createFridayButton('Sexta-Feira');

  function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'Sextou!!!';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
          fridays[index].style.color = ('red');
          fridays[index].style.fontStyle = ('italic');
          fridays[index].style.fontStyle = ('bold');
          
          //caso o texto não tenha sido substituído, ao clicar no botão ele será substituido pelo novo texto;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
          fridays[index].style.color = ('#777');
          fridays[index].style.fontStyle = ('normal');
          fridays[index].style.fontStyle = ('normal');
          //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
        }
      }
    });
  }

  let decemberFridays = [ 30, 7, 14, 21, 28 ];
displayFridays(decemberFridays); 

const days = document.querySelector('#days');

function addEventOnTargetZoomIn(){
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) { // Este addEventListener recebe como primeiro parâmetro o mouseover, que dispara a função ao passar o mouse por cima
        event.target.style.fontSize = '200%';
        event.target.style.fontWeight = '600';
    });
}
addEventOnTargetZoomIn();

function addEventOnTargetZoomOut(){
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) { // Este addEventListener recebe como primeiro parâmetro o mouseover, que dispara a função ao passar o mouse por cima
        event.target.style.fontSize = '50px';
        event.target.style.fontWeight = '200';
    });
}
addEventOnTargetZoomOut();

function createATask(strTask){    
    let getParent = document.querySelector('.my-tasks');
    let createTask = document.createElement('span');
    createTask.innerHTML = strTask;
    getParent.appendChild(createTask);
}

createATask('Estudar para o projeto!');

function createDivLegendTask(strColor){
    let getParent = document.querySelector('.my-tasks');
    let createDivLegend = document.createElement('div');
    createDivLegend.className = 'task';
    createDivLegend.style.backgroundColor = strColor;
    
    getParent.appendChild(createDivLegend);
}
createDivLegendTask('red');


function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }
  setTaskClass();



  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
        event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
      }
    });
  }
   
  setDayColor();



















