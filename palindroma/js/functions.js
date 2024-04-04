// test
console.log('Hello Functions');

/**
 * Description Verifica se la parola inserita è uguale ad un parola formata dalle stesse lettere in ordine inverso
 * @param {string} inputWord parola inserita dall'utente
 * @param {string} checkWorld parola di controllo
 * @returns {boolean} true se la parola è palindroma
 */
function isPalindrome (inputWord) {
    let checkWorld = "";
    let result = true;

    for (let i = inputWord.length - 1; i >=0; i--) {
        checkWorld = checkWorld + inputWord[i];
        console.log(checkWorld);
    }
    if (inputWord !== checkWorld) {
        result = false;
    }  

    return result;
}