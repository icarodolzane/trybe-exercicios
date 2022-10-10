window.onload = function(){
    const getSubmitButton = document.querySelector("#submitBtn");
    const getAgreement2 = document.querySelector('#agreement2');
    const getAgreement3 = document.querySelector('#agreement3');

    getSubmitButton.addEventListener('click', function(event){
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false){
        alert('Dados Inválidos');
    }else alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip'); 
    });

    const getResetButton = document.querySelector('#resetBtn');

    function enableSubmitButton(){
        getSubmitButton.disabled = !(getAgreement2.checked && getAgreement3.checked);
        
    }
    getAgreement2.addEventListener('change', enableSubmitButton);
    getAgreement3.addEventListener('change', enableSubmitButton);

};

function textInputValidation(){
    const email = document.querySelector('#userEmail');
    const invalidEmail = email < 10 || email > 50;
    const name = document.querySelector('#userName');
    const invalidName = name < 10 || name > 40;
    const answer = document.querySelector('#answer');
    const invalidanswer = answer >400; 

    if(invalidEmail || invalidName || invalidanswer){
        return false;
    } else{
        return true;
    } 

}