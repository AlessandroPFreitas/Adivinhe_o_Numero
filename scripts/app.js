let attempts = 0;
const min = 1;
const max = 50;
let random = Math.floor(Math.random() * (max - min) + min);
let triedNumbers = [];


function guessingNNumber(){
    const attemptsView = document.getElementById("attemptsNumber");
    const number = Number(document.getElementById("number-input").value);
    const message = document.getElementById("message");
    message.style.display = "block";
  
if(isNaN(number)){
    message.textContent = "O valor digitado não é valido";
} else if(number < min || number > max){
        message.textContent = `O número deve ser entre ${min} e ${max}`;
}else if (triedNumbers.includes(number)) {
            message.textContent = `Você já tentou o número ${number}. Tente outro.`;
}else{

    triedNumbers.push(number);
    attempts++;

    if (number < random) {
        message.textContent = `O número é maior que ${number}`;
        
    } else if (number > random) {
        message.textContent = `O número é menor que ${number}`;
    }
    else if (number === random){
        message.textContent = `Parabéns! Você acertou o número era ${random} e você tentou ${attempts} vezes. Tente adivinhar outro número.`;
        resetGame();
    }
    attemptsView.textContent = attempts;
}    
   document.getElementById("number-input").value = "";
}

function resetGame(){
    attempts = 0;
    random = Math.floor(Math.random() * (max - min) + min);
    triedNumbers = [];
    document.getElementById("attemptsNumber").textContent = attempts;
}