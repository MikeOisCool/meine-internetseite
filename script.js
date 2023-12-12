let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let ran_key;


function addVocabulary() {
    dictionary[deut.value] = englischText.value;

    deut.value = '';
    englischText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render() {
    vocabularyList.innerHTML = '';
    for (let key in dictionary) {
        vocabularyList.innerHTML += `<li class="vocabulary-item">
        <span>${key} - ${dictionary[key]}</span>
        <button onclick="removeVocabulary('${key}')">Löschen</button>
    </li>`;

    }
}
// Funktion zum Entfernen des Vokabulars
function removeVocabulary(key) {
    // Lösche das Vokabular mit dem angegebenen Schlüssel
    delete dictionary[key];
    // Aktualisiere die Anzeige
    render();
    // Aktualisiere auch den Local Storage
    localStorage.setItem('dictionary', JSON.stringify(dictionary));
}
function nextVocabulary() {
    let obj_keys = Object.keys(dictionary);
    ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    word.innerHTML = `${dictionary[ran_key]}?`;



}

function compare() {

    if (deut.value.toLowerCase() == ran_key.toLowerCase()) {
        text.innerHTML = "Richtig!!!"
    } else {
        text.innerHTML = "Falsch!!!"
    }
    deut.value = '';
    nextVocabulary();
}
function nextVocabulary2() {
    let obj_keys = Object.keys(dictionary);
    ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    document.getElementById('deutscheswortHeader').innerHTML = `${ran_key}?`;
}

function compare2() {
    let enteredText = document.getElementById('deutscheswort').value.trim();
    let lowercasedRanKey = ran_key.toLowerCase();
    let valueForRanKey = dictionary[ran_key];



    console.log(enteredText, lowercasedRanKey); // Überprüfe die Werte in der Konsole
    console.log(`enteredText: "${enteredText}"`);
console.log(`lowercasedRanKey: "${lowercasedRanKey}"`);
console.log(`valueForRankey = "${dictionary[ran_key]}"`);

    if (enteredText.toLowerCase() == valueForRanKey.toLowerCase())  {
        document.getElementById('text').innerHTML = "Richtig!!!";
    } else {
        document.getElementById('text').innerHTML = "Falsch!!!";
    }

    document.getElementById('deutscheswort').value = '';
    nextVocabulary2();
}
