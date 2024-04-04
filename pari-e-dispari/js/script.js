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
let resultText = "";

if (inputChoice === checkWin) {
    resultText = "Hai vinto!";
    console.log("Vince l'utente");
} else {
    resultText = "Hai perso!";
    console.log("Vince il pc");
}

const elemBody = document.querySelector('body');
const elemResult1 = document.createElement('p');
const elemResult2 = document.createElement('p');
const elemResult3 = document.createElement('p');
const elemResult4 = document.createElement('p');
const elemResult5 = document.createElement('p');
const elemResult6 = document.createElement('h2');
elemResult1.innerHTML = `Pari o Dispari: ${inputChoice}`;
elemResult2.innerHTML = `Il tuo numero: ${inputNumber}`
elemResult3.innerHTML = `Il numero del pc: ${randomNumber}`
elemResult4.innerHTML = `Somma dei due numeri: ${sum}`
elemResult5.innerHTML = `Il risultato è ${checkWin}`
elemResult6.innerHTML = `${resultText}`
elemBody.append(elemResult1);
elemBody.append(elemResult2);
elemBody.append(elemResult3);
elemBody.append(elemResult4);
elemBody.append(elemResult5);
elemBody.append(elemResult6);
