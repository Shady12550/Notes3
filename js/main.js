let genBtn = document.querySelector(".generate")
let autoBtn = document.querySelector(".auto")
let stoopBtn = document.querySelector("#stop")
let disV = document.querySelector(".text")
let quoteId = document.querySelector(".quote-id")
let autoStatus = document.querySelector(".auto-status")
let intervalId ;

let nArray;
let nName ;
let myArray = [
    ["Life is like riding a bicycle. To keep your balance, you must keep moving.",["Albert Einstein"]],
    ["Life is fragile and temporary. The faces of today quickly become the faces of the past.",["Shady"]],
    ["No one can make you feel inferior without your consent.",["Eleanor Roosevelt"]]];
// Adding
    let addBtn = document.querySelector(".addBtn")
    let inpQ = document.querySelector(".theQuote")
    let inpN = document.querySelector(".theName")
    addBtn.onclick = function () {
        window.sessionStorage.setItem("quote", inpQ.value)
        window.sessionStorage.setItem("name", inpN.value)
        nArray = [[window.sessionStorage.getItem("quote")],[window.sessionStorage.getItem("name")]]
        myArray.push(nArray)
        inpN.value = " Done"
        inpQ.value = "Thanks Sir "
        inpQ.readOnly = "true"
        inpN.readOnly = "true"
        addBtn.disabled =  true;
    
    }
    // //
function getQ() {
    let randomIndex = Math.floor(Math.random() * myArray.length);
    let randomElement = myArray[randomIndex];
    disV.innerHTML = randomElement[0];
    quoteId.innerHTML = randomElement[1];
}

genBtn.onclick = getQ;

// let innterval = setInterval(getQ, 2000)
autoBtn.onclick = function () {
    setInterval(getQ, 1500)
    autoStatus.innerHTML = "Auto On"
}


stoopBtn.onclick = function() {
    clearInterval(1);
    autoStatus.innerHTML = " " 
}


// adding 
