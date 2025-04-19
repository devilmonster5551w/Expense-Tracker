// const balance = document.getElementById('balance');
// const money_plus = document.getElementById('money-plus');
// const money_minus = document.getElementById('money-minus');
// const list = document.getElementById('list');
// const form = document.getElementById('form');
// const text = document.getElementById('text');
// const amount = document.getElementById('amount');

// let transactions = [];

// function addTransaction(e) {
//     e.preventDefault();

//     if (text.value.trim() === '' || amount.value.trim() === '') {
//         alert('Please add a text and amount');
//         return;
//     }

//     const transaction = {
//         id: generateID(),
//         text: text.value,
//         amount: +amount.value
//     };

//     transactions.push(transaction);

//     addTransactionDOM(transaction);
//     updateValues();
//     saveTransactions();  // Save transactions to local storage

//     text.value = '';
//     amount.value = '';
// }

// function generateID() {
//     return Math.floor(Math.random() * 100000000);
// }

// function addTransactionDOM(transaction) {
//     const sign = transaction.amount < 0 ? '-' : '+';

//     const item = document.createElement('li');

//     item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
//     item.classList.add('slide-in');

//     item.innerHTML = `
//         ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
//         <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
//     `;

//     list.appendChild(item);
// }

// function updateValues() {
//     const amounts = transactions.map(transaction => transaction.amount);

//     const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

//     const income = amounts
//         .filter(item => item > 0)
//         .reduce((acc, item) => (acc += item), 0)
//         .toFixed(2);

//     const expense = (
//         amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
//         -1
//     ).toFixed(2);

//     balance.innerText = `$${total}`;
//     money_plus.innerText = `$${income}`;
//     money_minus.innerText = `$${expense}`;
// }

// function removeTransaction(id) {
//     transactions = transactions.filter(transaction => transaction.id !== id);
//     saveTransactions();  // Save transactions after removal
//     init();
// }

// function saveTransactions() {
//     localStorage.setItem('transactions', JSON.stringify(transactions));
// }

// function loadTransactions() {
//     const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
//     if (storedTransactions) {
//         transactions = storedTransactions;
//         init();
//     }
// }

// function init() {
//     list.innerHTML = '';
//     loadTransactions();  // Load transactions from local storage
//     transactions.forEach(addTransactionDOM);
//     updateValues();
// }

// init();

// form.addEventListener('submit', addTransaction);







// const balance = document.getElementById('balance');
// const money_plus = document.getElementById('money-plus');
// const money_minus = document.getElementById('money-minus');
// const list = document.getElementById('list');
// const form = document.getElementById('form');
// const text = document.getElementById('text');
// const amount = document.getElementById('amount');

// let transactions = [];

// // Load transactions from Local Storage
// function loadTransactions() {
//     const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
//     if (storedTransactions) {
//         transactions = storedTransactions;
//         init();
//     }
// }

// // Save transactions to Local Storage
// function saveTransactions() {
//     localStorage.setItem('transactions', JSON.stringify(transactions));
// }

// function addTransaction(e) {
//     e.preventDefault();

//     if (text.value.trim() === '' || amount.value.trim() === '') {
//         alert('Please add a text and amount');
//         return;
//     }

//     const transaction = {
//         id: generateID(),
//         text: text.value,
//         amount: +amount.value
//     };

//     transactions.push(transaction);

//     addTransactionDOM(transaction);
//     updateValues();
//     saveTransactions();  // Save to Local Storage

//     text.value = '';
//     amount.value = '';
// }

// function generateID() {
//     return Math.floor(Math.random() * 100000000);
// }

// function addTransactionDOM(transaction) {
//     const sign = transaction.amount < 0 ? '-' : '+';

//     const item = document.createElement('li');

//     item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
//     item.classList.add('slide-in');

//     item.innerHTML = `
//         ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
//         <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
//     `;

//     list.appendChild(item);
// }

// function updateValues() {
//     const amounts = transactions.map(transaction => transaction.amount);

//     const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

//     const income = amounts
//         .filter(item => item > 0)
//         .reduce((acc, item) => (acc += item), 0)
//         .toFixed(2);

//     const expense = (
//         amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
//         -1
//     ).toFixed(2);

//     balance.innerText = `$${total}`;
//     money_plus.innerText = `$${income}`;
//     money_minus.innerText = `$${expense}`;
// }

// function removeTransaction(id) {
//     transactions = transactions.filter(transaction => transaction.id !== id);
//     saveTransactions();  // Save after removing
//     init();
// }

// function init() {
//     list.innerHTML = '';
//     transactions.forEach(addTransactionDOM);
//     updateValues();
// }

// // Download transactions as a text file
// document.getElementById('download-btn').addEventListener('click', function() {
//     const transactionsData = JSON.stringify(transactions, null, 2); // Pretty-printed JSON
//     const blob = new Blob([transactionsData], { type: 'text/plain' });
//     const link = document.createElement('a');

//     link.href = window.URL.createObjectURL(blob);
//     link.download = 'transactions.txt';
//     link.click();
// });

// form.addEventListener('submit', addTransaction);
// window.addEventListener('load', loadTransactions);  // Load transactions on page load

// init();










const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const resetBtn = document.getElementById('reset-btn');

let transactions = [];

// Load transactions from Local Storage
function loadTransactions() {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
        transactions = storedTransactions;
        init();
    }
}

// Save transactions to Local Storage
function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a text and amount');
        return;
    }

    const transaction = {
        id: generateID(),
        text: text.value,
        amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateValues();
    saveTransactions();  // Save to Local Storage

    text.value = '';
    amount.value = '';
}

function generateID() {
    return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.classList.add('slide-in');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    saveTransactions();  // Save after removing
    init();
}

function resetTransactions() {
    transactions = [];
    saveTransactions();  // Save the empty list to Local Storage
    init();
}

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

// Event listeners
form.addEventListener('submit', addTransaction);
window.addEventListener('load', loadTransactions);  // Load transactions on page load
resetBtn.addEventListener('click', resetTransactions);  // Reset transactions on button click

// Download transactions as a text file
document.getElementById('download-btn').addEventListener('click', function() {
    const transactionsData = JSON.stringify(transactions, null, 2); // Pretty-printed JSON
    const blob = new Blob([transactionsData], { type: 'text/plain' });
    const link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = 'transactions.txt';
    link.click();
});

init();

