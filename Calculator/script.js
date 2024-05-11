var calculation=""

function updateCalculation(value){
    calculation=calculation+value;
    displayCalculation();
    //localStorage.setItem('calculation',calculation);
}

function displayCalculation(){
    display=document.querySelector('.display-calculation');
    display.innerHTML=calculation;
}