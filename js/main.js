
/*----- constants -----*/
const DATA_LOOKUP = {
    '0': {
        numbers: [0],
        odds: 35,
    },
    '00': {
        numbers: [-1],
        odds: 35,
    },
    '1': {
        numbers: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        odds: 35,
    },
    '2': {
        numbers: [2],
        odds: 35,
    },
    '3': {
        numbers: [3],
        odds: 35,
    },
    '4': {
        numbers: [4],
        odds: 35,
    },
    '5': {
        numbers: [5],
        odds: 35,
    },
    '6': {
        numbers: [6],
        odds: 35,
    },
    '7': {
        numbers: [7],
        odds: 35,
    },
    '8': {
        numbers: [8],
        odds: 35,
    },
    '9': {
        numbers: [9],
        odds: 35,
    },
    '10': {
        numbers: [10],
        odds: 35,
    },
    '11': {
        numbers: [11],
        odds: 35,
    },
    '12': {
        numbers: [12],
        odds: 35,
    },
    '13': {
        numbers: [13],
        odds: 35,
    },
    '14': {
        numbers: [14],
        odds: 35,
    },
    '15': {
        numbers: [15],
        odds: 35,
    },
    '16': {
        numbers: [16],
        odds: 35,
    },
    '17': {
        numbers: [17],
        odds: 35,
    },
    '18': {
        numbers: [18],
        odds: 35,
    },
    '19': {
        numbers: [19],
        odds: 35,
    },
    '20': {
        numbers: [20],
        odds: 35,
    },
    '21': {
        numbers: [21],
        odds: 35,
    },
    '22': {
        numbers: [22],
        odds: 35,
    },
    '23': {
        numbers: [23],
        odds: 35,
    },
    '24': {
        numbers: [24],
        odds: 35,
    },
    '25': {
        numbers: [25],
        odds: 35,
    },
    '26': {
        numbers: [26],
        odds: 35,
    },
    '27': {
        numbers: [27],
        odds: 35,
    },
    '28': {
        numbers: [28],
        odds: 35,
    },
    '29': {
        numbers: [29],
        odds: 35,
    },
    '30': {
        numbers: [30],
        odds: 35,
    },
    '31': {
        numbers: [31],
        odds: 35,
    },
    '32': {
        numbers: [32],
        odds: 35,
    },
    '33': {
        numbers: [33],
        odds: 35,
    },
    '34': {
        numbers: [34],
        odds: 35,
    },
    '35': {
        numbers: [35],
        odds: 35,
    },
    '36': {
        numbers: [36],
        odds: 35,
    },
    split001: {
        numbers: [-1, 0],
        odds: 17,
    },
    split0020: {
        numbers: [-1, 0, 2],
        odds: 17,
    },
    split0003: {
        numbers: [0, 3],
        odds: 17,
    },
    split0102: {
        numbers: [1, 2],
        odds: 17,
    },
    split0203: {
        numbers: [2, 3],
        odds: 17,
    },
    split0104: {
        numbers: [1, 4],
        odds: 17,
    },
    split0205: {
        numbers: [2, 5],
        odds: 17,
    },
    split0306: {
        numbers: [3, 6],
        odds: 17,
    },
    split0405: {
        numbers: [4, 5],
        odds: 17,
    },
    split0506: {
        numbers: [5, 6],
        odds: 17,
    },
    split0407: {
        numbers: [4, 7],
        odds: 17,
    },
    split0508: {
        numbers: [5, 8],
        odds: 17,
    },
    split0609: {
        numbers: [6, 9],
        odds: 17,
    },
    split0708: {
        numbers: [7, 8],
        odds: 17,
    },
    split0809: {
        numbers: [8, 9],
        odds: 17,
    },
    split0710: {
        numbers: [7, 10],
        odds: 17,
    },
    split0811: {
        numbers: [8, 11],
        odds: 17,
    },
    split0912: {
        numbers: [9, 12],
        odds: 17,
    },
    split1011: {
        numbers: [10, 11],
        odds: 17,
    },
    split1112: {
        numbers: [11, 12],
        odds: 17,
    },
    split1013: {
        numbers: [10, 13],
        odds: 17,
    },
    split1114: {
        numbers: [11, 14],
        odds: 17,
    },
    split1215: {
        numbers: [12, 15],
        odds: 17,
    },
    split1314: {
        numbers: [13, 14],
        odds: 17,
    },
    split1415: {
        numbers: [14, 15],
        odds: 17,
    },
    split1316: {
        numbers: [13, 16],
        odds: 17,
    },
    split1417: {
        numbers: [14, 17],
        odds: 17,
    },
    split1518: {
        numbers: [15, 18],
        odds: 17,
    },
    split1617: {
        numbers: [16, 17],
        odds: 17,
    },
    split1718: {
        numbers: [17, 18],
        odds: 17,
    },
    split1619: {
        numbers: [16, 19],
        odds: 17,
    },
    split1720: {
        numbers: [17, 20],
        odds: 17,
    },
    split1821: {
        numbers: [18, 21],
        odds: 17,
    },
    split1920: {
        numbers: [19, 20],
        odds: 17,
    },
    split2021: {
        numbers: [20, 21],
        odds: 17,
    },
    split1922: {
        numbers: [19, 22],
        odds: 17,
    },
    split2023: {
        numbers: [20, 23],
        odds: 17,
    },
    split2124: {
        numbers: [21, 24],
        odds: 17,
    },
    split2223: {
        numbers: [22, 23],
        odds: 17,
    },
    split2324: {
        numbers: [23, 24],
        odds: 17,
    },
    split2225: {
        numbers: [22, 25],
        odds: 17,
    },
    split2326: {
        numbers: [23, 26],
        odds: 17,
    },
    split2427: {
        numbers: [24, 27],
        odds: 17,
    },
    split2526: {
        numbers: [25, 26],
        odds: 17,
    },
    split2627: {
        numbers: [26, 27],
        odds: 17,
    },
    split2528: {
        numbers: [25, 28],
        odds: 17,
    },
    split2629: {
        numbers: [26, 29],
        odds: 17,
    },
    split2730: {
        numbers: [27, 30],
        odds: 17,
    },
    split2829: {
        numbers: [28, 29],
        odds: 17,
    },
    split2930: {
        numbers: [29, 30],
        odds: 17,
    },
    split2831: {
        numbers: [28, 31],
        odds: 17,
    },
    split2932: {
        numbers: [29, 32],
        odds: 17,
    },
    split3033: {
        numbers: [30, 33],
        odds: 17,
    },
    split3132: {
        numbers: [31, 32],
        odds: 17,
    },
    split3233: {
        numbers: [32, 33],
        odds: 17,
    },
    split3134: {
        numbers: [31, 34],
        odds: 17,
    },
    split3235: {
        numbers: [32, 35],
        odds: 17,
    },
    split3336: {
        numbers: [33, 36],
        odds: 17,
    },
    split3435: {
        numbers: [34, 35],
        odds: 17,
    },
    split3536: {
        numbers: [35, 36],
        odds: 17,
    },
    corner01020405: {
        numbers: [1, 2, 4, 5],
        odds: 8,
    },
    corner02030506: {
        numbers: [2, 3, 5, 6],
        odds: 8,
    },
    corner04050708: {
        numbers: [4, 5, 7, 8],
        odds: 8,
    },
    corner05060809: {
        numbers: [5, 6, 8, 9],
        odds: 8,
    },
    corner07081011: {
        numbers: [7, 8, 10, 11],
        odds: 8,
    },
    corner08091112: {
        numbers: [8, 9, 11, 12],
        odds: 8,
    },
    corner10111314: {
        numbers: [10, 11, 13, 14],
        odds: 8,
    },
    corner11121415: {
        numbers: [11, 12, 14, 15],
        odds: 8,
    },
    corner13141617: {
        numbers: [13, 14, 16, 17],
        odds: 8,
    },
    corner14151718: {
        numbers: [14, 15, 17, 18],
        odds: 8,
    },
    corner16171920: {
        numbers: [16, 17, 19, 20],
        odds: 8,
    },
    corner17182021: {
        numbers: [17, 18, 20, 21],
        odds: 8,
    },
    corner19202223: {
        numbers: [19, 20, 22, 23],
        odds: 8,
    },
    corner20212324: {
        numbers: [20, 21, 23,24],
        odds: 8,
    },
    corner22232526: {
        numbers: [22, 23, 25, 26],
        odds: 8,
    },
    corner23242627: {
        numbers: [23, 24, 26, 27],
        odds: 8,
    },
    corner25262829: {
        numbers: [25, 26, 28, 29],
        odds: 8,
    },
    corner26272930: {
        numbers: [26, 27, 29, 30],
        odds: 8,
    },
    corner28293132: {
        numbers: [28, 29, 31, 32],
        odds: 8,
    },
    corner29303233: {
        numbers: [29, 30, 32, 33],
        odds: 8,
    },
    corner31323435: {
        numbers: [31, 32, 34, 35],
        odds: 8,
    },
    corner32333536: {
        numbers: [32, 33, 35, 36],
        odds: 8,
    },
    even: {
        numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
        odds: 1,
    },
    odd: {
        numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
        odds: 1,
    },
    black: {
        numbers: [2, 4, 6, 8, 10, 11, 13, 14, 15, 17, 20, 22, 23, 24, 26, 28, 29, 31, 33, 35],
        odds: 1,
    },
    red: {
        numbers: [1, 3, 5, 7, 9, 12, 16, 18, 19, 21, 25, 27, 30, 32, 34, 36],
        odds: 1,
    },
    tw1: { 
        numbers: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        odds: 2,
    },
    tw2: { 
        numbers: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        odds: 2,
    },
    tw3: { 
        numbers: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        odds: 2,
    },
    th1: { 
        numbers: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
        odds: 2,
    },
    th2: { 
        numbers: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
        odds: 2,
    },
    th3: { 
        numbers: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
        odds: 2,
    },
    low: {
        numbers: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        odds: 1,
    },
    high: {
        numbers: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        odds: 1,
    },
};
const CHIPSET = {
    onedollar: 1,
    fivedollar: 5,
    tendollar: 10,
    twentyfivedollar: 25,
    onehundreddollar: 100,
}

// const IMAGES = {
//     chip1 = 'url("http")',
//     chip5 = 'url("http")',
//     chip10 = 'url("http")',
//     chip25 = 'url("http")',
//     chip100 = 'url("http")',
// }
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
const betsEl = document.getElementById('nowBets')
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
    previousWins = [null, null, null, null, null]; //new Array(5).fill(null)
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
            winnings += (lookup.odds * bet.amount)
        } 
    })
    balance += winnings;
    lastBets.push(bets);
    bets = []
};
function getWinningNumber() {
    spinWheel(function() {
        winningNum = Math.floor(Math.random() * 38);
        previousWins.unshift(winningNum);
        previousWins.pop();
        calculateWinnings()
        render()
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
    if (bets.length) {
        for (key in bets) {
            let newDiv = document.createElement('div');
            betsEl.appendChild(newDiv)
            newDiv.textContent = `${key}:${bets['key']}`
        }
    }
};
function renderButtons() {
    spinBtn.style.visibility = bets.length ? 'visible' : 'hidden';
    clrBetBtn.style.visibility = bets.length ? 'visible' : 'hidden';
    betLastBtn.style.visibility = lastBets.length ? 'visible' : 'hidden';
};
function renderMessage() {
    if (winningNum) {
        msgEl.innerHTML = `<h3>Winning Number: ${winningNum}<br>Place your Bets!</h3>`
    } else if (!bets.length) {
        msgEl.innerHTML = '<h3>Place your Bets!</h3>';
    } else if (bets.length) {
        msgEl.innerHTML = `<h3>Placing Bets. Click Spin to Begin</h3>`;
    } else {
        msgEl.innerHTML = `<h3></h3>`
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