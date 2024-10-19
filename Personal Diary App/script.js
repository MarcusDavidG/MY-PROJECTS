const addEntryButton = document.getElementById('add-entry-btn');
const diaryEntryInput = document.getElementById('diary-entry');
const entryList = document.getElementById('entry-list');

let entries = [];

// Add new diary entry
function addDiaryEntry() {
    const entryText = diaryEntryInput.value.trim();

    if (entryText === '') {
        alert('Please write something before adding an entry.');
    } else {
        const entry = {
            id: generateID(),
            text: entryText,
            date: new Date().toLocaleString()
        };

        entries.push(entry);
        addEntryToDOM(entry);

        diaryEntryInput.value = ''; // Clear the input field
    }
}

// Generate a random ID for each entry
function generateID() {
    return Math.floor(Math.random() * 1000000);
}

// Add entry to DOM
function addEntryToDOM(entry) {
    const li = document.createElement('li');
    li.innerHTML = `
        <p>${entry.text}</p>
        <span class="date">${entry.date}</span>
        <button class="delete-btn" onclick="deleteEntry(${entry.id})">x</button>
    `;
    entryList.appendChild(li);
}

// Delete an entry
function deleteEntry(id) {
    entries = entries.filter(entry => entry.id !== id);
    init(); // Refresh the entry list
}

// Initialize the app by loading entries into DOM
function init() {
    entryList.innerHTML = '';
    entries.forEach(addEntryToDOM);
}

// Event listener for adding a diary entry
addEntryButton.addEventListener('click', addDiaryEntry);

init();
