const centerColor = document.getElementById("sawCenterColor");
const centerText = document.getElementById("sawCenterText");
const timerText = document.getElementsByClassName("saw-next-game-counter")

const wheel = document.getElementById("saw-wheel-bg");


var options = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

var spinTimeout = null

var spinAngle = 10

let spinDest = 0
let spinDestTotal = 0

let choiceCheck= ""
let choiceIndex= null
let choiceStyle = ""

let timer = 3000;
let shouldCount = true;

let results = []

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

setInterval(function() { 
  var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timer % (1000 * 60)) / 1000);

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  timerText[0].innerHTML = minutes + ":" + seconds;
  // If the count down is over, write some text 
  if (timer <= 0) {
    spin()
    timer = 30000
  } else if (shouldCount) {
    timer-= 1000
  }
}, 1000);

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
    if(item === 0){
        return RGB2Color(0, 255, 0)
    }else if(item % 2 === 0){
        return RGB2Color(0, 0, 0)
    }else{
        return RGB2Color(255, 0, 0)
    }
}

function spin() {
  //spinAngleStart = Math.random() * 10 + 10;
  spinDest = 0;
  let prize = 8
  spinDestTotal = ((prize - 1) * 9.729) + 360 * 5;
  rotateWheel(wheel);
}

const rotateWheel = function() {
  
  /*wheel.style.transition = 'none'
  wheel.style.transform = 'rotate(0)'
  // Generate a number between 1 and 6
  let prize = (Math.floor(Math.random() * 6)) + 1;
  // Spin to the angle of the segment based on the random number
  let segmentAngle = ((prize - 1) * -9.729);
  // Add on 3 full spins
  let randomSpins = 5
  segmentAngle += randomSpins * 360;
  

  wheel.style.transition = 'all 5s ease-out'

  wheel.style.webkitTransform = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.mozTransform    = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.msTransform     = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.oTransform      = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.transform       = 'rotate('+segmentAngle+'deg)';
  
  // Display the result
  shouldCount = true
  
  //document.getElementById("result").innerHTML = "Congrats you got " + prize;
  */
 spinDest += 4;

 if(spinDest >= spinDestTotal) {
   stopRotateWheel();
   return;
 }
 let spinAngle = 0 + easeOut2(spinDest, 0, 0,spinDestTotal);
 wheel.style.rotate = String(spinAngle+"deg")
 //startAngle += (spinAngle * Math.PI / 180);
 spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  spinDest = 0
  //var degrees = startAngle * 180 / Math.PI + 90;
  //var arcd = arc * 180 / Math.PI;
  //var index = Math.floor((360 - degrees % 360) / arcd);
  //var text = options[index]
}

function easeOut(actualDest, totalDest) {
  let k = Number(actualDest/totalDest)
  result = 1 - Math.pow(1-k, 1.675)
  return result
}

function easeOut2(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

function checkDegree(k) {}


function checkIndex() {
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  return index
}

function showStats(arr) {
}

function checkWin(num){
  // will check if the bet is on
  let winnings = 0;
  let losings = 0;
  let orderNum = Array.from(Array(37).keys())

    if(choiceCheck === "2:1" && choiceIndex === 13) {
      const colOne = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else if (colOne.includes(num)) {
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }
    }else if(choiceCheck === "2:1" && choiceIndex === 26) {
      const colTwo = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else if (colTwo.includes(num)) {
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }
    }else if(choiceCheck === "2:1" && choiceIndex === 39) {
      const colThree = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else if (colThree.includes(num)) {
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }
    }else if(choiceCheck === "1st 12"){
      const first = orderNum.slice(1,13)
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 3
        lost.textContent = losings
      }else if (first.includes(num)) {
        winnings = Number(bet.innerText) * 3
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 3
        lost.textContent = losings
      }
    }else if(choiceCheck === "2nd 12"){
      const second = orderNum.slice(13,25)
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 3
        lost.textContent = losings
      }else if (second.includes(num)) {
        winnings = Number(bet.innerText) * 3
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 3
        lost.textContent = losings
      }
    }else if(choiceCheck === "3rd 12"){
      const third = orderNum.slice(25,37)
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 3
        lost.textContent = losings
      }else if (third.includes(num)) {
        winnings = Number(bet.innerText) * 3
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 3
        lost.textContent = losings
      }
    }else if(choiceCheck === "1-18"){
      const begin = orderNum.slice(1,19)
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else if (begin.includes(num)) {
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }
    }else if(choiceCheck === "18-36"){
      const last = orderNum.slice(19,37)
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else if (last.includes(num)) {
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }
    }else if(choiceCheck === "Even"){
      if(num === 0 || num % 2 != 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else{
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }
    }else if(choiceCheck === "Odd"){
      if(num === 0 || num % 2 === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else{
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }
    }else if(choiceCheck === "Red"){
      const reds = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else if (reds.includes(num)) {
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }
    }else if(choiceCheck === "Black"){
      const black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
      if(Number(choiceCheck) === 0){
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }else if (black.includes(num)) {
        winnings = Number(bet.innerText) * 2
        won.textContent = winnings
      }else{
        losings = Number(bet.innerText) * 2
        lost.textContent = losings
      }
    }else{
    if(Number(choiceCheck) === 0){
      losings = Number(bet.innerText) * 36
      lost.textContent = losings
    }else if (Number(choiceCheck) === num){
      winnings = Number(bet.innerText) * 36
      won.textContent = winnings
    }else{
      losings = Number(bet.innerText) * 36
      lost.textContent = losings
    }
  }
}