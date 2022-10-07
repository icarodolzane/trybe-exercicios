const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? Devido a classe .tech que levanta em 20px.

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? Criei uma função removeClass com o evento moveover, assim no instante que a li recebe a classe pela ação do usuário, ao mover o mouse para fora da li ela recebe a função para remover a classe.

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
function addTechClass (event){
    event.target.className = 'tech';
    /* console.log(event.target); */
};

function removeTech(event) {
  event.target.removeAttribute('class');
  /* console.log(event.target); */
  
};

firstLi.addEventListener('dblclick', resetText);

function inputText (event){
  const getText = document.getElementById('first-li');
  getText.innerText = event.target.value;
  console.log(event.target);

};

function goToWebPage(){
  window.location.replace('https://blog.betrybe.com/');
}

myWebpage.addEventListener('mouseover', function(){
  myWebpage.style.color='pink';
});
myWebpage.addEventListener('mouseleave', function(){
  myWebpage.style.color='white';
});

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

firstLi.addEventListener('mouseover', addTechClass);
firstLi.addEventListener('mouseleave', removeTech);
secondLi.addEventListener('mouseover', addTechClass);
secondLi.addEventListener('mouseleave', removeTech);
thirdLi.addEventListener('mouseover', addTechClass);
thirdLi.addEventListener('mouseleave', removeTech);
input.addEventListener('input', inputText);
myWebpage.addEventListener('dblclick',goToWebPage);