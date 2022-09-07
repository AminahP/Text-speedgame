//add Alphabet border 
// problem, not showing random quotes 
//need to take 3 seconds off when a letter is missed 


// define the time limit
let TIME_LIMIT = 60;

// define quotes to be used
let quotes_array = [
"Being a functional adult everday seems a bit excessive",
"Failure is the condiment that gives success its flavor.",
"Age is of no importance, unless you are cheese.",
"It's going to be hard, but hard does not mean impossible.",
"Learning never exhausts the mind.",
"The purpose of our ;ives is to be happy."
];

// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;
