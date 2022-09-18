//add Alphabet border 
// problem, not showing random quotes (fixed thanks to my uncle)
//need to take 3 seconds off when a letter is missed (kaleb)
// click on the area below needs to hold the quote (idk what i meant by that lol)

// buttons document queryselector

const startButton = document.querySelector('.start');
const restartButton= document.querySelector('.restart');
const endButton = document.querySelector('.endGame');


// define the time limit
let timeLIMIT = 60;

//key press event listener need more research 
// object.addEventListener("keypress", myScript);


// define quotes to be used  
let quotesArray = [
"Being a functional adult everday seems a bit excessive",
"Failure is the condiment that gives success its flavor.",
"Age is of no importance, unless you are cheese.",
"It's going to be hard, but hard does not mean impossible.",
"Learning never exhausts the mind.",
"The purpose of our lives is to be happy."
];

// selecting required elements
let timerText = document.querySelector(".currTime");
let accuracyText = document.querySelector(".currAccuracy");
let errorText = document.querySelector(".currErrors");
let cpmText = document.querySelector(".curr-cpm");
let wpmText = document.querySelector(".curr-wpm");
let quoteText = document.querySelector(".quote");
let inputArea = document.querySelector(".inputArea");
let cpmGroup = document.querySelector(".cpm");
let wpmGroup = document.querySelector(".wpm");
let error = document.querySelector(".errors");
let accuracyGroup = document.querySelector(".accuracy");


// speed elements 
let timeLeft = timeLIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let currentQuote = "Age is off no importance, unless you are cheese";
let quoteNo = 0;
let timer = null;

//when finished quote show next quote 

function updateQuote(){
    quote_text.textContent = null;
    currentQuote = quotesArray[quoteNo];

    current_quote.split('').forEach(char => {
      const charSpan = document.createElement('span')
      charSpan.innerText = char
      quote_text.appendChild(charSpan)
    })


}


















// insert animated clock and code 
//add Alphabet border 
// problem, not showing random quotes 
//need to take 3 seconds off when a letter is missed 
// click on the area below needs to hold the quote

