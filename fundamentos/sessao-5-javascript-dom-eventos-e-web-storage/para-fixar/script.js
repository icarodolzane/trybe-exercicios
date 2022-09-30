const cabecalho = document.getElementById('header-container').style.backgroundColor = 'green';

const rodape = document.getElementById('footer-container').style.backgroundColor = 'rgb(10, 47, 34)';

const fonteH3 = document.getElementsByTagName('h3'); 
let corH3 = 'white';
mudaCorH3(fonteH3, corH3);
const fundoH3Emergency = document.querySelectorAll('.emergency-tasks h3');
corH3 = 'violet';
mudaCorFundoH3(fundoH3Emergency, corH3);
let fundoH3NoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
corH3 = 'black';
mudaCorFundoH3(fundoH3NoEmergency, corH3);


const sectionNoEmergency = document.querySelectorAll('.no-emergency-tasks')[0].style.backgroundColor = 'yellow';
const sectionEmergency = document.querySelectorAll('.emergency-tasks')[0].style.backgroundColor = 'orange';














//functions bellow


function mudaCorH3 (fonte, cor){
    
    for (let index =0; index < fonteH3.length; index += 1){
        fonteH3[index].style.color = cor;
          
    };
    return ;
     
}

function mudaCorFundoH3(fundoH3, cor){
    for (let index =0; index < fundoH3.length; index += 1){
        fundoH3[index].style.backgroundColor = cor;
          
    };
    return ;
}