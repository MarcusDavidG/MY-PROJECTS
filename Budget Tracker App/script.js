const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = [];

// Add new transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please enter both text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);
        addTransactionToDOM(transaction);
        updateValues();

        text.value = '';
        amount.value = '';
    }
}

// Generate a random ID for each transaction
function generateID() {
    return Math.floor(Math.random() * 1000000);
}

// Add transaction to DOM
function addTransactionToDOM(transaction) {
    const sign = transaction.amount > 0 ? '+' : '-';
    const item = document.createElement('li');

    item.classList.add(transaction.amount > 0 ? 'plus' : 'minus');
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    list.appendChild(item);
}

// Update income, expenses, and balance
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const incomeTotal = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expenseTotal = (
        amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balance.innerText = `$${total}`;
    income.innerText = `+$${incomeTotal}`;
    expense.innerText = `-$${expenseTotal}`;
}

// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateValues();
    init();
}

// Initialize app
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionToDOM);
    updateValues();
}

form.addEventListener('submit', addTransaction);

init();
