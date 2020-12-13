const gr = document.getElementById("gr");
const mise = document.getElementById("mise");
const combi = document.getElementById("combi");
const cotesMax = document.getElementById("cotesMax");
const cotesMin = document.getElementById("cotesMin");
const maxGain = document.getElementById("maxGain");
const minGain = document.getElementById("minGain");
const selection = document.getElementById("Selection");
const choice = document.querySelectorAll(".choice");
const addToBet = document.querySelectorAll(".addToBet");
let choiceCheck = "";
let choiceIndex = null;


// Ticket Object
let ticket = {
  fakeId: null,
  eventResult: null,
  eventNum: 8,
  eventTime: null,
  minGain: null,
  maxGain: null,
  cotesMin: null,
  cotesMax: null,
  status: null,
  gr: 1,
  mise: null,
  ticketWinSum: 1,
  combi: null,
  choiceList: []
}; 

// Tabs Navigation
document.getElementsByClassName("tablinks")[0].click();

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].classList.contains("is-block")) {
      tabcontent[i].className = tabcontent[i].className.replace(" is-block", " is-hidden");
    }
  }
  
  // Get all elements with class="tablinks" and remove the class "is-active"
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  
  // Show the current tab, and add an "is-active" class to the button that opened the tab
  let target = document.getElementById(tabName);
  target.className = target.className.replace(" is-hidden", " is-block");
  evt.currentTarget.className += " is-active";
}

const historyTab = document.getElementById("history-tab")
const historyContent = document.getElementById("history-content")

historyTab.addEventListener('click',function getAllTickets() {
    axios.get('http://localhost:8000/tickets')
    .then(res => {updateHistory(res.data)})
    .catch(err => {console.log(err)})
  }
  
)

function updateHistory(arr) {
  historyContent.innerHTML = ''
  function checkStat(stat) {
    if (stat === false) {
      return 'Lose'
    }else if(stat === true){
      return 'Win'
    }else{
      return 'Open'
    }
  }

  arr.forEach(ticket => {
    historyContent.innerHTML += '<tr><td onclick="showModal(\'historyModal\',\''+ticket.fakeId+'\')">Info</td><td>'+
    ticket.fakeId+'</td><td> DT</td><td>'+checkStat(ticket.status)+'</td></tr>'
  });
}


// Modal Controller
function showModal(idName, id) {
  modal = document.getElementById(idName);
  modal.className += " is-active";
  axios.get('http://localhost:8000/ticket', { params: { fakeId: id } })
  .then(res => {updateModal(res.data);})
  .catch(err => {console.log(err)})
}

// Modal Update
function updateModal(ticket) {
  console.log(ticket);
  const modalInfo = document.getElementsByClassName("ticket-info")
  modalInfo[0].innerHTML = ticket.fakeId
  modalInfo[1].innerHTML = ticket.mise
  modalInfo[2].innerHTML = ticket.date
  modalInfo[3].innerHTML = ticket.combi
  modalInfo[4].innerHTML = ticket.fakeId

  const modalDetail = document.getElementById("ticket-detail")
  modalDetail.innerHTML = '<tr><th>GR</th><th>Combi</th><th>Mise></th><th>Gain Min potential</th><th>Gain Max potential</th><th>Ganyez</th></tr>'
  modalDetail.innerHTML += '<tr><td>'+ ticket.gr +'</td><td>'+ ticket.combi +'</td><td>'+
  ticket.mise+'</td><td>'+ticket.minGain+'</td><td>'+ticket.maxGain+'</td><td>hello</td></tr>'
  
  const modalChoices = document.getElementById("ticket-choices")
  modalChoices.innerHTML = '<tr><th>Heure</th><th>Evenement</th><th>selection</th><th>event result</th><th>Resulta</th><th>Cotes</th><th>Gain</th></tr>'
  ticket.choiceList.forEach(e => {modalChoices.innerHTML += '<tr><td>'+ticket.eventTime+'</td><td>Spin&Win</td><td>'+
  ticket.eventResult+'</td><td>'+e.status+'</td><td>'+e.cotes+'</td><td>'+e.selectionWinSum+'</td></tr>'
    }
  )
}

function hideModal(idName) {
  modal = document.getElementById(idName);
  modal.className = modal.className.replace(" is-active", "");
} 

// Select Bets
for (let i = 0; i < addToBet.length - 1; i++) {
  addToBet[i].addEventListener("click", function (e) {
    let addedBet = addToBet[i].textContent;
    ticket.gr += Number(addedBet);
    ticket.mise = ticket.gr*ticket.combi;
    mise.innerText = ticket.mise
    gr.innerText = ticket.gr;
    updateGain();
  });
}

addToBet[4].addEventListener("click", function (e) {
  ticket.gr = 1;
  gr.innerText = 1;
  updateGain();
});

/* Add user selections to the side in a table.
  each with an event that call removeSelect function if delete clicked */
for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", function (e) {
    choiceCheck = choice[i].textContent;
    ticket.choiceList.push({
      choice: choice[i].textContent,
      cotes: checkCotes(choiceCheck),
      status: null,
      selectionWinSum: 0
    });
    updateCombi()
    updateMise()
    updateCotes(ticket.choiceList)
    updateGain()
    selection.innerHTML += "<tr><td>" + String(ticket.choiceList[ticket.choiceList.length - 1].choice) + "</td><td>" + String(ticket.choiceList[ticket.choiceList.length - 1].cotes) + "</td><td onclick='removeSelect(event)'>X</td></tr>";
  });
}

function removeSelect(evt) {
  targetSelection = evt.currentTarget.parentElement;
  getElementIndex(targetSelection);
  ticket.choiceList.splice(targetSelection, 1);
  targetSelection.remove();
  updateCombi();
  updateMise()
  updateCotes(ticket.choiceList);
  updateGain();
}

function getElementIndex(element) {
  return Array.from(element.parentNode.children).indexOf(element);
}

function checkCotes(choiceCheck) {
  let cotes = null;

  if (choiceCheck === "PAIR" || choiceCheck === "IMPAIR" || choiceCheck === "ROUGE" || choiceCheck === "NOIR") {
    cotes = 2;
  } else if (choiceCheck === "1-12" || choiceCheck === "13-24" || choiceCheck === "25-36") {
    cotes = 3;
  } else if (choiceCheck === "A" || choiceCheck === "B" || choiceCheck === "C" || choiceCheck === "D" || choiceCheck === "E" || choiceCheck === "F") {
    cotes = 6;
  } else {
    cotes = 36;
  }

  return cotes;
}

function updateCotes(target) {
  if (target.length > 0) {
    let cotesList = [];
    target.forEach(e => {
      cotesList.push(e.cotes);
    });
    ticket.cotesMax = Math.max(...cotesList);
    ticket.cotesMin = Math.min(...cotesList);
    cotesMax.innerText = ticket.cotesMax;
    cotesMin.innerText = ticket.cotesMin;
  } else {
    ticket.cotesMax = 0;
    ticket.cotesMin = 0;
    cotesMax.innerTchoiceListext = "-";
    cotesMin.innerText = "-";
  }
}

function updateCombi() {
  ticket.combi = ticket.choiceList.length;
  combi.innerText = ticket.combi;
}

function updateMise() {
  ticket.mise = ticket.gr*ticket.combi;
  mise.innerText = ticket.mise
}

function updateGain() {
  ticket.minGain = ticket.cotesMin * Number(ticket.gr);
  ticket.maxGain = ticket.cotesMax * Number(ticket.gr);
  maxGain.innerText = ticket.maxGain;
  minGain.innerText = ticket.minGain;
}


// 
const print = document.getElementById("print")
print.addEventListener("click", 
function approveTicket() {
  axios.get('http://localhost:8000/event')
  .then(res => {updateTicket(res.data.number); })
  .catch(err => {console.log(err)})
})

function getLastTicketFakeID() {
  axios.get('http://localhost:8000/ticketID')
  .then(res => {console.log(res.data)})
  .catch(err => {console.log(err)})
}

function updateTicket(eventNumber) {
  ticket.eventNum = (eventNumber + 1)
  ticket.fakeId = 212062053767
  axios.post('http://localhost:8000/ticket', ticket)
  .then(res => {console.log('ticket has been posted')})
  .catch(err => {console.log(err)})
  console.log(ticket)
}