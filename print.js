const $btnPrint = document.querySelector("#btnPrint");
let random = Math.floor(Math.random() * 10000);

JsBarcode("#barcode", random.toString(), {
    format: "CODE39",
    lineColor: "black",
    width: 2,
    height: 40,
    displayValue: false
  });
  
var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();

  document.getElementById('TimeDate').innerHTML = datetime;
  document.getElementById('TicketNumber').innerHTML = "Milk"; 
  document.getElementById('Combi').innerHTML = "3"; 
  document.getElementById('mise').innerHTML = "3"; 
  document.getElementById('MiseTotale').innerHTML = "3"; 

  var GRList = document.getElementsByClassName("GR")[0];
  GRList.innerHTML = "Milk";

  var GRList = document.getElementsByClassName("GR")[1];
  GRList.innerHTML = "Milk";

  var maxList = document.getElementsByClassName("MinGain")[0];
  maxList.innerHTML = "Milk";

  var maxList = document.getElementsByClassName("MinGain")[1];
  maxList.innerHTML = "Milk";

  var minList = document.getElementsByClassName("MaxGain")[0];
  minList.innerHTML = "Milk";

  var minList = document.getElementsByClassName("MaxGain")[1];
  minList.innerHTML = "Milk";
  
  var GRList = document.getElementsByClassName("gameTitle")[0];
  GRList.innerHTML = "249423014  Spin&Win2";

  var GRList = document.getElementsByClassName("gameInfo")[0];
  GRList.innerHTML = currentdate.getHours() + ":"  + currentdate.getMinutes()+"  "+"Sector: C";

  var GRList = document.getElementsByClassName("Coutes")[0];
  GRList.innerHTML = "6.00";

  const ChoiceList = document.getElementById("ChoiceList")
  ChoiceList.forEach(e => {
      ChoiceList.innerHTML +="";
  })

$btnPrint.addEventListener("click", () => {
    window.print();
});