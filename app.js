let totalCost = 0;
let rent = Number(document.getElementById("rentInput").value);
let expenses = Number(document.getElementById("expensesInput").value);
let groceries = Number(document.getElementById("groceriesInput").value);
let cellphone = Number(document.getElementById("cellphoneInput").value);
let personalCare = Number(document.getElementById("personalCareInput").value);
let subscriptions = Number(document.getElementById("subscriptionsInput").value);
let healthInsurance = Number(document.getElementById("healthInsuranceInput").value);
let carGas = Number(document.getElementById("carGasInput").value);
let carInsurance = Number(document.getElementById("carInsuranceInput").value);
let carPayment = Number(document.getElementById("carPaymentInput").value);
let extra = Number(document.getElementById("extraInput").value);

document.getElementById("rentInput").onchange = function () {
    rent = Number(document.getElementById("rentInput").value);
    calcTotal();
}
document.getElementById("expensesInput").onchange = function () {
    expenses = Number(document.getElementById("expensesInput").value)
    calcTotal();
}
document.getElementById("groceriesInput").onchange = function () {
    groceries = Number(document.getElementById("groceriesInput").value)
    calcTotal();
}
document.getElementById("cellphoneInput").onchange = function () {
    cellphone = Number(document.getElementById("cellphoneInput").value)
    calcTotal();
}
document.getElementById("personalCareInput").onchange = function () {
    personalCare = Number(document.getElementById("personalCareInput").value)
    calcTotal();
}
document.getElementById("subscriptionsInput").onchange = function () {
    subscriptions = Number(document.getElementById("subscriptionsInput").value)
    calcTotal();
}
document.getElementById("healthInsuranceInput").onchange = function () {
    healthInsurance = Number(document.getElementById("healthInsuranceInput").value)
    calcTotal();
}
document.getElementById("carGasInput").onchange = function () {
    carGas = Number(document.getElementById("carGasInput").value)
    calcTotal();
}
document.getElementById("carInsuranceInput").onchange = function () {
    carInsurance = Number(document.getElementById("carInsuranceInput").value)
    calcTotal();
}
document.getElementById("carPaymentInput").onchange = function () {
    carPayment = Number(document.getElementById("carPaymentInput").value)
    calcTotal();
}
document.getElementById("extraInput").onchange = function () {
    extra = Number(document.getElementById("extraInput").value)
    calcTotal();
}


document.getElementById("rent").onclick = function () { calcTotal(); }
document.getElementById("expenses").onclick = function () { calcTotal(); }
document.getElementById("groceries").onclick = function () { calcTotal() }
document.getElementById("cellphone").onclick = function () { calcTotal() }
document.getElementById("personalCare").onclick = function () { calcTotal() }
document.getElementById("subscriptions").onclick = function () { calcTotal() }
document.getElementById("healthInsurance").onclick = function () { calcTotal() }
document.getElementById("carGas").onclick = function () { calcTotal() }
document.getElementById("carInsurance").onclick = function () { calcTotal() }
document.getElementById("carPayment").onclick = function () { calcTotal() }
document.getElementById("extra").onclick = function () { calcTotal() }

function calcTotal() {
    totalCost = 0;
    if (document.getElementById("rent").checked) { totalCost += rent; }
    if (document.getElementById("expenses").checked) { totalCost += expenses; }
    if (document.getElementById("groceries").checked) { totalCost += groceries; }
    if (document.getElementById("cellphone").checked) { totalCost += cellphone; }
    if (document.getElementById("personalCare").checked) { totalCost += personalCare; }
    if (document.getElementById("subscriptions").checked) { totalCost += subscriptions; }
    if (document.getElementById("healthInsurance").checked) { totalCost += healthInsurance; }
    if (document.getElementById("carGas").checked) { totalCost += carGas; }
    if (document.getElementById("carInsurance").checked) { totalCost += carInsurance; }
    if (document.getElementById("carPayment").checked) { totalCost += carPayment; }
    if (document.getElementById("extra").checked) { totalCost += extra; }

    document.getElementById("totalSum").textContent = totalCost;
}