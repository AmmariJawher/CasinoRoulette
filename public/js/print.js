"use strict";

function popUp(ticket){
var frog = window.open("","wildebeast","width=300,height=500,scrollbars=1,resizable=1")

var html = '<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="printStyle.css"><script src="JsBarcode.all.min.js"></script></head><body><button id="btnPrint" class="hidden-print">Print</button><div class="ticket"><div class="centered"><h2>Logo</h2>'+
      '<span id="adresse">Adrese line</span><span> - </span><span id="TimeDate"></span>'+
      '<br><span>Ticket   </span><span id="TicketNumber"></span>'+
      '</div><div id="Bar" class="centered"><svg id="barcode"></svg></div><div class="grid-container"><div class="grid-item">'+
      '<p></p><span>GR: </span><span id="GRValue" class="GR"></span><p>Gain min/max</p></div><div class="grid-item right"><p></p>'+
      '<span id="Combi"></span><span> * </span><span class="GR"></span><span> TND</span><span> = </span><span id="mise"></span><span> TND</span>'+
      '<p></p><span class="MinGain"></span><span> / </span><span class="MaxGain"></span><span>  TND</span></div></div><div class="lineDashed"></div>'


      html += ' <div id="ChoiceList"><div><p class="gameTitle">249423014  Spin&Win</p><div class="grid-container"><div class="grid-item">'+
          '<p class="gameInfo">19:32 Sector: B</p></div><div class="grid-item right"><p class="Coutes">6:00</p></div></div><div class="lineDotted"></div></div></div>'

      html += '</div><p></p><div class="grid-container"><div class="grid-item"><b><p>Mise Totale</p>'+
          '<p>Gain min/max</p></b></div><div class="grid-item right"><b><p></p><span id="MiseTotale"></span><span>TND</span><p></p><span class="MinGain"></span><span> / </span>'+
          '<span class="MaxGain"></span><span>  TND</span></b></div></div></div><script src="print.js"></script></body></html>'
frog.document.open()
frog.document.write(html)
frog.document.close()
}