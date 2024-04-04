// test
console.log('Hello Functions');

/**
 * Description Richiede all'utente di scegliere tra 'pari' o 'dispari' e verifica che non inserisca altre parole
 * @returns {string} scelta dell'utente tra 'pari' o 'dispari'
 */
function userChoice() {
    let userPreference = prompt('Scegli pari o dispari').toLocaleLowerCase();
    
    while (userPreference !== "pari" && userPreference !== "dispari") {
        alert('Scelta non valida');
        userPreference = prompt('Scegli pari o dispari').toLocaleLowerCase();
    }
    return userPreference;
}


/**
 * Description Richiede all'utente un numero tra 1 e 5
 * @returns {number} numero scelto dall'utente nell'intervallo da 1 a 5
 */
function userNumber() {
    let userNum = parseInt(prompt('Scegli un numero tra 1 e 5'));

    while (userNum < 1 || userNum > 5) {
        alert('Scelta non valida');
        userNum = parseInt(prompt('Scegli un numero tra 1 e 5'));
    }

    return userNum;
}

/**
 * Description Genera un numero random per il computer
 * @returns {number} il numero random generato per il computer
 */
function pcNumber() {
    const pcRandomNum = Math.floor(Math.random() * 5) + 1;
    return pcRandomNum;
}

/**
 * Description Verifica se il risultato della somma dei due numeri è un numero pari
 * @param {calcSum} calcSum somma del numero utente e del numero random
 * @returns {boolean} true se il risultato della somma è pari
 */
function isEven(calcSum) {
    let result = true;

    if (calcSum % 2 !== 0) {
        result = false;
    }

    return result; 
}