const numberOfCharactersRange = document.getElementById('numberOfCharactersRange');
const numberOfCharacters = document.getElementById('numberOfCharacters');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const includeUppercaseCharsElement = document.getElementById('includeUppercaseCharacters');
const includeLowercaseCharsElement = document.getElementById('includeLowercaseCharacters');
const form = document.getElementById('generatePasswordForm');
const displayedPassword = document.getElementById('displayedPassword');
const SYMBOL_ASCII_CODE = asciiRange(33, 47).concat(asciiRange(58, 64)).concat(asciiRange(91, 96)).concat(asciiRange(123, 126));
const NUMBER_ASCII_CODE = asciiRange(48, 57);
const LOWERCASE_ASCII_CODE = asciiRange(97, 122);
const UPPERCASE_ASCII_CODE = asciiRange(65, 90);


numberOfCharactersRange.addEventListener('input', syncRangeSlider);
numberOfCharacters.addEventListener('input', syncRangeSlider);

form.addEventListener('submit', e => {
    // Prevents refresh on each generation of new password 
    e.preventDefault();

    const characterAmount = numberOfCharacters.value;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const includeLowercase = includeLowercaseCharsElement.checked;
    const includeUppercase = includeUppercaseCharsElement.checked;
    const generatedPassword = generatePassword(characterAmount, includeNumbers, includeSymbols, includeLowercase, includeUppercase);
    displayedPassword.innerText = generatedPassword;
})

// Syncs range slider for the passwords length with corresponding number of characters
function syncRangeSlider(e) {
    const value = e.target.value;
    numberOfCharactersRange.value = value;
    numberOfCharacters.value = value;
} 

// Determines the range of ascii for respective characters, symbols, and numbers for password and inserts them into an array
function asciiRange(low, high) {
    const array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

function generatePassword(characterAmount, includeNumbers, includeSymbols, includeLowercase, includeUppercase) {
    let asciiCodes = [];
    if(includeNumbers) {
        asciiCodes = asciiCodes.concat(NUMBER_ASCII_CODE);
    } 
    if(includeSymbols) {
        asciiCodes = asciiCodes.concat(SYMBOL_ASCII_CODE);
    }
    if(includeLowercase){
        asciiCodes = asciiCodes.concat(LOWERCASE_ASCII_CODE);
    }
    if(includeUppercase) {
        asciiCodes = asciiCodes.concat(UPPERCASE_ASCII_CODE);
    }
    
    const passwordChars = [];
    for(let i = 0; i < characterAmount; i++){
        // Choose a random character from asciiCodes array and push it onto passwordChars array which contains all characters for the password 
        const selectedCharacter = asciiCodes[Math.floor(Math.random() * asciiCodes.length)];
        passwordChars.push(String.fromCharCode(selectedCharacter));
    }
    return passwordChars.join('');
}