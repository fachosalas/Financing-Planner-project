
const rent = 1500;
const expenses = 120;
const groceries =80;
const cellphone = 160;
const personalCare = 50;
const subscriptions = 70;
const healthInsurance = 200;
const carGas = 200;
const carInsurance = 380;
const carPayment = 210;
const extra =200;

document.getElementById("rent").onclick = function () {
    calcTotal();
}
document.getElementById("expenses").onclick = function () {
    calcTotal();
}
document.getElementById("groceries").onclick =function(){calcTotal()}
document.getElementById("cellphone").onclick =function(){calcTotal()}
document.getElementById("personalCare").onclick =function(){calcTotal()}
document.getElementById("subscriptions").onclick =function(){calcTotal()}
document.getElementById("healthInsurance").onclick =function(){calcTotal()}
document.getElementById("carGas").onclick =function(){calcTotal()}
document.getElementById("carInsurance").onclick =function(){calcTotal()}
document.getElementById("carPayment").onclick =function(){calcTotal()}
document.getElementById("extra").onclick =function(){calcTotal()}

function calcTotal() {
    let totalCost = 0;
    if (document.getElementById("rent").checked) {totalCost += rent; }
    if (document.getElementById("expenses").checked) {totalCost += expenses;}
    if (document.getElementById("groceries").checked) {totalCost += groceries;}
    if (document.getElementById("cellphone").checked) {totalCost += cellphone;}
    if (document.getElementById("personalCare").checked) {totalCost += personalCare;}
    if (document.getElementById("subscriptions").checked) {totalCost += subscriptions;}
    if (document.getElementById("healthInsurance").checked) {totalCost += healthInsurance;}
    if (document.getElementById("carGas").checked) {totalCost += carGas;}
    if (document.getElementById("carInsurance").checked) {totalCost += carInsurance;}
    if (document.getElementById("carPayment").checked) {totalCost += carPayment;}
    if (document.getElementById("extra").checked) {totalCost += extra;}

    document.getElementById("totalSum").textContent = totalCost;
}