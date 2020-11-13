/*----- constants -----*/
const CHIPSET = {
    onedollar: 1,
    fivedollar: 5,
    tendollar: 10,
    twentyfivedollar: 25,
    onehundreddollar: 100,
};
const chipSound = new Audio('sounds/chipSound.wav');
const crowdWow = new Audio('sounds/crowdWow.wav');
const loss = new Audio('sounds/loss.wav');
/*----- app's state (variables) -----*/
let balance;
let totalCurrentBet;
let winnings;
let currentChip;
let winningNum;
let previousWins;
let lastBets;
/*----- cached element references -----*/
const spinBtn = document.getElementById('spin');
const clrBetBtn = document.getElementById('clrBet');
const betLastBtn = document.getElementById('betLast');
const msgEl = document.getElementById('message');
const wheelEl = document.getElementById('wheel');
const balanceEl = document.getElementById('balance');
const totalBetEl = document.getElementById('totalBet');
const winningsEl = document.getElementById('winnings');
const boardEl = document.querySelectorAll('.board > div');
const boardDivEl = document.querySelectorAll('.board > div > div');
/*----- event listeners -----*/
document.querySelector('.board').addEventListener('click', handleBetPlacement);
document.querySelector('.selectChip').addEventListener('click', handleChipSelect);
document.querySelector('.buttons').addEventListener('click', handleBtnClick);
/*----- functions -----*/
init()

function init() {
    balance = 10000;
    totalCurrentBet = 0;
    winnings = 0;
    currentChip = CHIPSET.onedollar;
    bets = [];
    previousWins = [null, null, null, null, null];
    lastBets = [];
    render();
};
function render() {
    balanceEl.textContent = `Balance: $${balance}`;
    totalBetEl.textContent = `Total Bet: $${totalCurrentBet}`;
    winningsEl.textContent = `Winnings: $${winnings}`;
    renderButtons();
    renderPreviousWins();
    renderBetPlacement();
    renderMessage();
};
function calculateWinnings() {
    winnings = 0;
    bets.forEach(function(bet) {
        const lookup = DATA_LOOKUP[bet.type];
        if (lookup.numbers.includes(winningNum)) {
            winnings += (lookup.odds * bet.amount);
        } 
    })
    balance += winnings;
    lastBets = bets;
    bets = [];
    if (winnings > 0) {
        crowdWow.play();
    } else {
        loss.play();
    }
};
function getWinningNumber() {
    spinWheel(function() {
        winningNum = Math.floor(Math.random() * 38);
        previousWins.unshift(winningNum);
        previousWins.pop();
        calculateWinnings();
        render();
    });
};
function handleBetPlacement(evt) {
    if (evt.target.className === 'placeholder') return;
    let betObj = {};
    betObj.type = evt.target.id;
    betObj.amount = currentChip;
    bets.push(betObj); 
    balance -= currentChip;
    totalCurrentBet += currentChip;
    chipSound.play();
    render();
};
function handleBtnClick(evt) {
    if (evt.target.tagName !== 'BUTTON') return;
    if (evt.target.id === 'spin') getWinningNumber();
    if (evt.target.id === 'clrBet') bets = [];
    if (evt.target.id === 'betLast') bets = lastBets;
    render();
};
function handleChipSelect(evt) {
    if (evt.target.tagName !== 'DIV') return;
    currentChip = CHIPSET[evt.target.id];
    render();
};

function renderBetPlacement() {
    boardEl.forEach(function(betPlace) {
        let boardId = betPlace.getAttribute('id');
        if (bets.length) {
            bets.forEach(function(bet) {
                if (bet.type === boardId) betPlace.classList.add('chipBackground');
            });
        } else {
            betPlace.classList.remove('chipBackground');
        }
    });
    boardDivEl.forEach(function(betDivPlace) {
        let boardDivId = betDivPlace.getAttribute('id');
        if (bets.length) {
            bets.forEach(function(bet) {
                if (bet.type === boardDivId) betDivPlace.classList.add('chipBackground');
            });
        } else {
            betDivPlace.classList.remove('chipBackground');
        }
    });
};
function renderButtons() {
    spinBtn.style.visibility = bets.length ? 'visible' : 'hidden';
    clrBetBtn.style.visibility = bets.length ? 'visible' : 'hidden';
    betLastBtn.style.visibility = !bets.length && lastBets.length ? 'visible' : 'hidden';
};
function renderMessage() {
    if (winningNum) {
        msgEl.innerHTML = `<h3>Winning Number: ${winningNum}<br>Place your Bets!</h3>`;
    } else if (!bets.length) {
        msgEl.innerHTML = '<h3>Welcome! Place your Bets!</h3>';
    } else if (bets.length) {
        msgEl.innerHTML = `<h3>Placing Bets. Click Spin to Begin</h3>`;
    } else {
        msgEl.innerHTML = `<h3></h3>`;
    }
};
function renderPreviousWins() {
    if (previousWins[0]) document.getElementById('ln1').textContent = previousWins[0];
    if (previousWins[1]) document.getElementById('ln2').textContent = previousWins[1];
    if (previousWins[2]) document.getElementById('ln3').textContent = previousWins[2];
    if (previousWins[3]) document.getElementById('ln4').textContent = previousWins[3];
    if (previousWins[4]) document.getElementById('ln5').textContent = previousWins[4];
};
function spinWheel(cb) {
    wheelEl.classList.add('spinWheel');
    setTimeout(function() {
        wheelEl.classList.remove('spinWheel');
        cb();
    }, 2000);
};