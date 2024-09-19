const passwordElement = document.getElementById('password');
const copyButton = document.getElementById('copy');
const lengthElement = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');

// Character codes
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));

// Update length label dynamically
lengthElement.addEventListener('input', () => {
    lengthValue.textContent = lengthElement.value;
});

// Generate password
generateButton.addEventListener('click', () => {
    const length = lengthElement.value;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    const password = generatePassword(
        length,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
    );
    passwordElement.value = password;
});

// Copy password to clipboard
copyButton.addEventListener('click', () => {
    passwordElement.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

// Password generation function
function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let charCodes = [];
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);

    const passwordCharacters = [];
    for (let i = 0; i < length; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

// Helper function to create array of character codes
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}
