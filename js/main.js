
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
    integer: {
        numbers: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        odds: 35,
    },
    // '2': {
    //     numbers: [2],
    //     odds: 35,
    // },
    // '3': {
    //     numbers: [3],
    //     odds: 35,
    // },
    // '4': {
    //     numbers: [4],
    //     odds: 35,
    // },
    // '5': {
    //     numbers: [5],
    //     odds: 35,
    // },
    // '6': {
    //     numbers: [6],
    //     odds: 35,
    // },
    // '7': {
    //     numbers: [7],
    //     odds: 35,
    // },
    // '8': {
    //     numbers: [8],
    //     odds: 35,
    // },
    // '9': {
    //     numbers: [9],
    //     odds: 35,
    // },
    // '10': {
    //     numbers: [10],
    //     odds: 35,
    // },
    // '11': {
    //     numbers: [11],
    //     odds: 35,
    // },
    // '12': {
    //     numbers: [12],
    //     odds: 35,
    // },
    // '13': {
    //     numbers: [13],
    //     odds: 35,
    // },
    // '14': {
    //     numbers: [14],
    //     odds: 35,
    // },
    // '15': {
    //     numbers: [15],
    //     odds: 35,
    // },
    // '16': {
    //     numbers: [16],
    //     odds: 35,
    // },
    // '17': {
    //     numbers: [17],
    //     odds: 35,
    // },
    // '18': {
    //     numbers: [18],
    //     odds: 35,
    // },
    // '19': {
    //     numbers: [19],
    //     odds: 35,
    // },
    // '20': {
    //     numbers: [20],
    //     odds: 35,
    // },
    // '21': {
    //     numbers: [21],
    //     odds: 35,
    // },
    // '22': {
    //     numbers: [22],
    //     odds: 35,
    // },
    // '23': {
    //     numbers: [23],
    //     odds: 35,
    // },
    // '24': {
    //     numbers: [24],
    //     odds: 35,
    // },
    // '25': {
    //     numbers: [25],
    //     odds: 35,
    // },
    // '26': {
    //     numbers: [26],
    //     odds: 35,
    // },
    // '27': {
    //     numbers: [27],
    //     odds: 35,
    // },
    // '28': {
    //     numbers: [28],
    //     odds: 35,
    // },
    // '29': {
    //     numbers: [29],
    //     odds: 35,
    // },
    // '30': {
    //     numbers: [30],
    //     odds: 35,
    // },
    // '31': {
    //     numbers: [31],
    //     odds: 35,
    // },
    // '32': {
    //     numbers: [32],
    //     odds: 35,
    // },
    // '33': {
    //     numbers: [33],
    //     odds: 35,
    // },
    // '34': {
    //     numbers: [34],
    //     odds: 35,
    // },
    // '35': {
    //     numbers: [35],
    //     odds: 35,
    // },
    // '36': {
    //     numbers: [36],
    //     odds: 35,
    // },
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
    split: {
        numbers: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        odds: 17,
    },
    corner: {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        odds: 8,
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
let bets;
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
    console.log('init')
    render();
};
function render() {
    balanceEl.textContent = `Balance: $${balance}`;
    totalBetEl.textContent = `Total Bet: $${totalCurrentBet}`;
    winningsEl.textContent = `Winnings: $${winnings}`;
    renderButtons();
    renderPreviousWins();
    renderBetPlacement();
};
function renderMessage() {
    msgEl.innerHTML = '<h2>Place your Bets!</h2>';
    console.log('renderMessage');
};
function renderButtons() {
    spinBtn.style.visibility = bets.length ? 'visible' : 'hidden';
    clrBetBtn.style.visibility = bets.length ? 'visible' : 'hidden';
    betLastBtn.style.visibility = lastBets.length ? 'visible' : 'hidden';
    console.log('renderButtons');
};
function handleBetPlacement(evt) {
    if (evt.target.className === 'placeholder') return;
    let classSplit = evt.target.className.split(' ');
    let firstClass = classSplit[0]; 
    let betObj = {
        //what kind of bet
        //number bet was placed on
        //bet amount
    };
    betObj.type = firstClass;
    betObj.number = evt.target.id;
    betObj.amount = currentChip;
    bets.push(betObj);
    balance -= currentChip;
    totalCurrentBet += currentChip;
    render();
    console.log(bets);
};
function handleChipSelect(evt) {
    currentChip = CHIPSET[evt.target.id];
    renderMessage();
    render();
    console.log('chip is ', currentChip);
};
function handleBtnClick(evt) {
    console.log('handleBtnClick');
    if (evt.target.id === 'spin') getWinningNumber();
    if (evt.target.id === 'clrBet') bets = [];
    if (evt.target.id === 'betLast') bets = lastBets;
};
function getWinningNumber() {
    spinWheel();
    winningNum = Math.floor(Math.random() * 38);
    previousWins.unshift(winningNum);
    previousWins.pop();
    calculateWinnings()
    renderPreviousWins();

    console.log('getWinningNumber');
};
function spinWheel() {
    //render wheel spinning
    console.log('spinWheel');
    return;
};
function calculateWinnings() {
    console.log('calculateWinnings');
};
function renderPreviousWins() {
    if (previousWins[0]) document.getElementById('ln1').textContent = previousWins[0];
    if (previousWins[1]) document.getElementById('ln2').textContent = previousWins[1];
    if (previousWins[2]) document.getElementById('ln3').textContent = previousWins[2];
    if (previousWins[3]) document.getElementById('ln4').textContent = previousWins[3];
    if (previousWins[4]) document.getElementById('ln5').textContent = previousWins[4];
    console.log('renderPreviousWins');
};
function renderBetPlacement() {
    console.log('renderBetPlacement');
};

/*
1. define required constants
    define a wheel object with numbers, colors, 12ths, rows, even/odd, 1-18, 19-36, or column objects 
    define a chipset amt array
2. define required variables used the track the state of the game
    use a variable to represent player balance
    use a variable to represent total current bet
    use a variable to represent last hand winnings
    use a variable to represent current chip amount
    use a variable to represent current bet placement
    use a variable to represent winning num
    define previous wins variable
    define last bet variable
3. store elements on the page that will be access in the code more than 
once in variable to make code more concise, readable and performant
    store the chipset
    store the main board
    store the roulette wheel
    store the past winnings element
    store the current bet element
    store the spin and clear bet btns
    store the bet last btn
4.Upon loading the app should:
    Initialize the state variables
        initialize player balance to 10000
        initialize current bet sum to 0
        initialize last hand winnings sum to 0
        initialize current chip amount to 1
        initialize current bet placement to null
        initialize winning number to null
        initialize past numbers array to 7 nulls
    render state variables to the page
        render player balance
            balance = total balance + last hand winnings
        render current bet sum 
            current bet = current bet element * times clicked
        render the board
            loop over bet placement array, for each iteration
                use iteration to access mapped value from board array
                change color to lighter
                last hand winnings = current bet placement * odds
            push to past winning numbers array
            current bet placement is last winning number
    wait for the user to click something
5. handle player clicking on a chip
    obtain index of chipset by extracting index of an id in the element
        update current chip amout
6. handle a player clicking on a square
    obtain index of board by extracting id 
        update bet placement array
            if already bet on
                total bet on id + current chip amt
    update current bet
    update balance 
    show clear and spin btns
7. handle player clicking on spin
    use math.random to choose what wheel array winner will land on
    calculate winnings 
        loop throgh each bet object in bets array
        for each bet object 
            lookup type of bet on data lookup object
            check if number array inside of object contains result number
                true 
                    update winnings (multiple bet amt to odds number)
    clear bets 
    call render

8. handle player clicking on clear
    update total bet to 0
    update balance
    set current bet placement to null


American roulette characteristics:
Bet	        Payout	Odds
Straight up	35:1	2,60%
Split	    17:1	5,30%
Street	    11:1	7,90%
Corner	    8:1	    10,50%
Six Line	5:1	    15,80%
Column	    2:1	    31,60%
Dozen	    2:1	    31,60%
Even/Odd	1:1	    47,40%
Red/Black	1:1	    47,40%
High/Low	1:1	    47,40%
*/

// on init execute a teach me function
//teach me function runs through how to play the game