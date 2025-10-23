
// document.getElementById("totalSum").textContent = 3000;
// console.log(document.getElementById("totalSum").textContent)

document.getElementById("rent").onclick = function(){
    calcTotal();
}

function calcTotal(){
    let totalCost =0;
    // let rent = document.getElementById("rent").checked;
    if (document.getElementById("rent").checked){
        totalCost =+ document.getElementById("rent").value;
        console.log(totalCost)
    }

    document.getElementById("totalSum").textContent = totalCost;
}