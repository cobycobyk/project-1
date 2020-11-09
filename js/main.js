
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
        numbers: [1],
        odds: 35,
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
        numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
        odds: 1,
    },
    red: {
        numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
        odds: 1,
    },
    split1: { //halves
        numbers: [1, 2],
        odds: 17,
    },
    corner1: { //fouths
        numbers: [1, 2, 4, 5],
        odds: 8,
    },
    tw1: { //twelfths rows
        numbers: [1, 2, 4, 5],
        odds: 8,
    },
    th1: { //thirds columns
        numbers: [1, 2, 4, 5],
        odds: 2,
    },
    low { //one to 18
        numbers: [1, 2, 4, 5],
        odds: 1,
    }
};
const CHIPSET = {
    '1': 1,
    '5': 5,
    '10': 10,
    '25': 25,
    '100': 100,
}

const IMAGES = {
    chip1 = 'url("http")'
    chip5 = 'url("http")'
    chip10 = 'url("http")'
    chip25 = 'url("http")'
    chip100 = 'url("http")'
}
/*----- app's state (variables) -----*/
const balance;
const totalCurrentBet;
const winnings;
const currentChip;
const bets;
const winningNum;
const previousWins;
const lastBets;
/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init()

function init() {
    bets = [];

    render();
};
function render() {

}
function calculateWinnings() {

}

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