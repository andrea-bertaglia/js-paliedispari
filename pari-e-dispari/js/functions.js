// test
console.log('Hello Functions');

function userChoice() {
    let userPreference = prompt('Scegli pari o dispari').toLocaleLowerCase();
    
    while (userPreference !== "pari" && userPreference !== "dispari") {
        alert('Scelta non valida');
        userPreference = prompt('Scegli pari o dispari').toLocaleLowerCase();
    }
    return userPreference;
}


function userNumber() {
    let userNum = parseInt(prompt('Scegli un numero tra 1 e 5'));

    while (userNum < 1 || userNum > 5) {
        alert('Scelta non valida');
        userNum = parseInt(prompt('Scegli un numero tra 1 e 5'));
    }

    return userNum;
}

function pcNumber() {
    const pcRandomNum = Math.floor(Math.random() * 5) + 1;
    return pcRandomNum;
}

function isEven(calcSum) {
    let result = true;

    if (calcSum % 2 !== 0) {
        result = false;
    }

    return result; 
}