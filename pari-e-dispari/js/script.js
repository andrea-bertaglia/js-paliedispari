// test
console.log('Hello Script');

// Input
const inputChoice = userChoice();
console.log('Scelta utente: ', inputChoice);

const inputNumber = userNumber();
console.log('Numero utente: ', inputNumber);

const randomNumber = pcNumber();
console.log('Numero random pc: ',randomNumber);

// Logic
let sum = inputNumber + randomNumber;
console.log('Somma numero utente + numero pc random: ',sum);

let checkWin = "pari";

if (isEven(sum)) {
    console.log('La somma è pari');
} else {
    checkWin = "dispari";    
    console.log('La somma è dispari');
}

// Output
if (inputChoice === checkWin) {
    console.log("Hai vinto! - Ha vinto l'utente");
} else {
    console.log("Hai perso! - Ha vinto il pc");
}