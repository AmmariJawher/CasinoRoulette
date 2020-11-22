const bet = document.getElementById("bet")
const choice = document.querySelectorAll(".choice")
const addToBet = document.querySelectorAll(".addToBet")
const won = document.getElementById("won")
const lost = document.getElementById("lost")

var options = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

let choiceCheck= ""
let choiceIndex= null
let choiceStyle = ""

// User Bet Sum
console.log(addToBet);
for(let i = 0; i<addToBet.length - 1; i++){
  addToBet[i].addEventListener("click", function(e){
    console.log('Works')
    addedBet = addToBet[i].textContent
    bet.innerText = Number(bet.innerText) + Number(addedBet)
    console.log(addedBet)
  })
}

addToBet[4].addEventListener("click", function(e){
  bet.innerText = 1
})

// User Bet Choice
for(let i = 0; i<choice.length; i++){
  choice[i].addEventListener("click", function(e){
    e.preventDefault()
    choiceCheck = choice[i].textContent
    choiceIndex = i
    console.log(choiceCheck)
  })
}