// test
console.log('Hello Script');

// Input dati
const userWord = prompt('Inserisci una parola')

// Logica - richiamo la funzione che verifica se è la parola è palindroma
if (isPalindrome(userWord)) {
    console.log('ok è palindroma');
    resultText = "OK! La parola inserita è palindroma";
} else {
    console.log('no non è palindroma');
    resultText = "NO! La parola inserita non è palindroma";
}

// Output dati
const elemBody = document.querySelector('body');
const elemWord = document.createElement('h2');
const elemResult = document.createElement('h3');
elemWord.innerHTML = `La parola inserita è: ${userWord}`;
elemResult.innerHTML = resultText;
elemBody.append(elemWord);
elemBody.append(elemResult);
