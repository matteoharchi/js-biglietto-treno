// PROMPT
var kmviaggio = prompt("Quanti km dovrai percorrere?");
var eta = prompt("Quanti anni hai?");
// DATI FISSI
var prezzokm = 0.21;
var scontominori = 0.80;
var scontosenior = 0.60;
var prezzobiglietto = prezzokm * kmviaggio;
// VARIABILI
if (eta < 18) {
    var prezzobiglietto = prezzobiglietto * scontominori;
} else if (eta > 65) {
    var prezzobiglietto = prezzobiglietto * scontosenior;
}

document.getElementById("prezzo-biglietto").innerHTML="Il prezzo del tuo biglietto è" + " " + "€" + prezzobiglietto.toFixed(2) + ".";
