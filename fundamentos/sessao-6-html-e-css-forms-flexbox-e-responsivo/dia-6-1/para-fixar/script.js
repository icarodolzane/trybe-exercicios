const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function (event){
    event.preventDefault();
})
INPUT_CHECKBOX.addEventListener('click', function(event){
    event.preventDefault();
})
function checkLetterA(event){
    const charCode =event.charCode;
    if(charCode!==0){
        if(charCode!==97)event.preventDefault();
        displayWarning('You are only allowed to input the letter -a- in lowercase');
    }
}

INPUT_TEXT.addEventListener('keypress', checkLetterA, false);

