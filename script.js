const operBttn = document.querySelectorAll(".operatorButtons");
operBttn.forEach(bttn => bttn.addEventListener("click", ops)); 
const numBttn = document.querySelectorAll(".numberButtons");
numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 
const clear = document.querySelector("#clear");
clear.addEventListener("click", clearAll); 
const delBttn = document.querySelector("#delete");
delBttn.addEventListener("click", clearOne); 
const displayedAnswer = document.getElementById("answer");
const displayedEq = document.getElementById("equation");
const decimal = document.getElementById("deci");

const keyd = document.addEventListener('keydown', function(event) {
    if(event.key === "Escape") {
        clearAll();
    }
    else if(event.key === "Backspace") {
        clearOne();
    }
    else if(event.key === "=") {
        operate();
    }
    else if((event.key === "/") || (event.key === "+") || (event.key === "-") || (event.key === "*")) {
        console.log("gi")
        j = event.key
        ops();
    }
    else if((event.key === "1") || (event.key === "2") || (event.key === "3") || (event.key === "4") || 
    (event.key === "5") || (event.key === "6") || (event.key === "7") || (event.key === "8") || 
    (event.key === "9")) {
        console.log("gi")
        n = event.key
        nums();
    }
});

displayedAnswer.textContent = ""; 
function displayedNumber(){
    console.log("sus")
    if (queue.length === 0){
        displayedAnswer.textContent = ""
    }
    else if ((queue.length === 2 && displayValue2 === "") || (queue.length === 1)){
        displayedAnswer.textContent = queue[0]
    }
    else{
        displayedAnswer.textContent = queue[1]
    }
    if (queue.length === 2 && (operators !== "new" && operators !== "")){
        displayedEq.textContent = (queue[0]+" "+operators)
    }
    else{
        displayedEq.textContent = ""
    }
}

function clearAll(e){
    console.log(e)
    operators = ""
    displayValue = ""
    displayValue2 = ""
    queue = []
    console.log(queue)
    return displayedNumber()
}
function clearOne(e){       
    if(displayValue2.length !== 15){
        console.log("yo")
        decimal.removeEventListener("click", nums);
        decimal.addEventListener("click", nums);
    }
    if(displayValue.length !== 15){
        console.log("yo")
        decimal.removeEventListener("click", nums);
        decimal.addEventListener("click", nums);
    }
    if(queue.length === 1){
        if (displayValue.length >= 15){
            numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 
            console.log("hi")
        }
        console.log(e)
        displayValue.toString()
        displayValue = displayValue.slice(0, displayValue.length - 1);
        queue.splice(0,1,displayValue)
        console.log(queue)
        return displayedNumber()
    }
    else if (displayValue2 !== ""){
        if (displayValue2.length >= 15){
            numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 
            console.log("hi")
        }
        console.log(e)
        displayValue2.toString()
        displayValue2 = displayValue2.slice(0, displayValue2.length - 1);
        queue.splice(1,1,displayValue2)
        console.log(queue)
        return displayedNumber()
    }
}

function addition(){
    newdisplayValue = parseFloat(queue[0])+parseFloat(queue[1])
    queue.push(Math.round(1000*newdisplayValue)/1000)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
function subtraction(){
    newdisplayValue = parseFloat(queue[0])-parseFloat(queue[1])
    queue.push(Math.round(1000*newdisplayValue)/1000)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
  
function multiply(){
    newdisplayValue = parseFloat(queue[0])*parseFloat(queue[1])
    queue.push(Math.round(1000*newdisplayValue)/1000)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
  
function divide(){
    newdisplayValue = parseFloat(queue[0])/parseFloat(queue[1])
    queue.push(Math.round(1000*newdisplayValue)/1000)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
function operate(){
    if (operators === "+"){
        console.log(queue)
        if (queue.length === 1 || (queue.length === 2 && queue[1] === "")){
            newdisplayValue = queue[0]
            return displayedNumber
        }
        else{
            console.log(addition())
            addition()
            queue.splice(-1,1)
            console.log(queue)
            operators = "new"
            return displayedNumber()
        }
    }
    else if (operators === "-"){
        if (queue.length === 1 || (queue.length === 2 && queue[1] === "")){
            newdisplayValue = queue[0]
            return displayedNumber
        }
        else{
            console.log(subtraction())
            subtraction()
            queue.splice(-1,1)
            console.log(queue)
            operators = "new"
            return displayedNumber()
        }
    }
    else if (operators === "*"){
        if (queue.length === 1 || (queue.length === 2 && queue[1] === "")){
            newdisplayValue = queue[0]
            return displayedNumber
        }
        else{
            console.log(multiply())
            multiply()
            queue.splice(-1,1)
            console.log(queue)
            operators = "new"
            return displayedNumber()
        }
    }
    else if (operators === "/"){
        if (queue.length === 1 || (queue.length === 2 && queue[1] === "")){
            newdisplayValue = queue[0]
            return displayedNumber
        }
        else{
            console.log(divide())
            divide()
            queue.splice(-1,1)
            console.log(queue)
            operators = "new"
            return displayedNumber()
        }
    }
}

operators = ""
function ops(e){
    decimal.addEventListener("click", nums)
    console.log(e)
    if (typeof e !== "undefined" || typeof j === "undefined"){
        console.log("fhhhghgh")
        typeof j === "undefined"
        y = e.target.textContent
    }
    else if(typeof j !== "undefined" || typeof e === "undefined"){ 
        typeof e === "undefined"                          
        y = j                                             
    }
    console.log(y)
    if (queue.length === 1){
        console.log("shoosh")
        displayValue = Number(queue[0])
        queue.shift()
        queue.push(displayValue)
    }
    else if(queue.length === 2){
        displayValue2 = Number(queue[1])
        queue.splice(-1,1);
        queue.push(displayValue2)
    } 
    displayedNumber()
    if (y === "+"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "+"
            return operators
        }
        else{
            return operators = "+"
        }
    }
    else if (y === "-"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "-"
            return operators
        }
        else{
            return operators = "-"
        }
    }
    else if (y === "*"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "*"
            return operators
        }
        else{
            return operators = "*"
        }
    }
    else if (y === "/"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "/"
            return operators
        }
        else{
            return operators = "/"
        }
    }
    else if (y === "="){
        if (displayValue2 === "" || queue.length < 2){
            if (displayValue === ""){
                console.log(0)
                return 0
            }
            else{
                console.log(parseFloat(queue[0]))
                return parseFloat(queue[0])
            }
        }
        else{
            operate()
        }
    }
}

queue = []
displayValue = ""
displayValue2 = "" 
decimal.addEventListener("click", nums)
document.addEventListener('keydown', function(event) { 
    if(event.key === ".") {
        n = event.key
        nums();
    }
});
document.addEventListener('keydown', function(event) { 
    if(event.key === "0") {
        n = event.key
        nums();
    }
});

function nums(e){
    if (operators === "new" && queue.length === 1){
        console.log(queue)
        queue = []
        console.log(queue)
        displayValue = ""
        displayValue2 = ""
        operators = ""
    }
    if (typeof e !== "undefined" || typeof n === "undefined"){
        console.log("fhhhghgh")
        typeof n === "undefined"
        x = e.target.textContent
    }
    else if(typeof n !== "undefined" || typeof e === "undefined"){ 
        typeof e === "undefined"                          
        x = n                                           
    }
    decimal.addEventListener("click", nums)
    console.log(e);
    console.log(x)
    if (operators !== ""){
        if (displayValue2.includes(".")){
            if (x === "."){
                x = ""
            }
        }
        for (i = 0; i < displayValue2.length; i++){
            if(displayValue2.length === 15){   
                numBttn.forEach(bttn => bttn.removeEventListener("click", nums)); 
                decimal.removeEventListener("click", nums);
                displayValue2 = displayValue2.substring(0, displayValue2.length - 1);
            }
        }
        console.log("h")
        displayValue2 += x
        console.log(displayValue2)
        if (displayValue2.includes("..")){
            console.log("swoos")
            displayValue2 = displayValue2.substring(0, displayValue2.length - 1);
        }
        else if (displayValue2.includes("00")){
            if((displayValue2. indexOf(".") === -1) && (displayValue2. indexOf("0") === 0)){
                console.log("swoos")
                displayValue2 = displayValue2.substring(0, displayValue2.length - 1);
            }
        }
        else if ((displayValue2.indexOf("0") === 0) && ((displayValue2.indexOf("1") === 1) || 
        (displayValue2.indexOf("2") === 1) || (displayValue2.indexOf("3") === 1) || (displayValue2.indexOf("4") === 1)
        || (displayValue2.indexOf("5") === 1) || (displayValue2.indexOf("6") === 1) || (displayValue2.indexOf("7") === 1)
        || (displayValue2.indexOf("8") === 1) || (displayValue2.indexOf("9") === 1))){
            displayValue2 = displayValue2.substring(1);
        }
        console.log(displayValue2)
        if (queue.length === 2){
            queue.splice(-1,1);
        }
        queue.push(displayValue2)
        console.log(queue)
        displayedNumber()
    }
    else{
        if (displayValue.includes(".")){
            if (x === "."){
                x = ""
            }
        }
        for (i = 0; i < displayValue.length; i++){
            if(displayValue.length === 15){
                numBttn.forEach(bttn => bttn.removeEventListener("click", nums)); 
                decimal.removeEventListener("click", nums);
                displayValue = displayValue.substring(0, displayValue.length - 1);
            }
        }
        displayValue += x
        if (displayValue.includes("..")){
            console.log("swoos")
            displayValue = displayValue.substring(0, displayValue.length - 1);
        }
        else if (displayValue.includes("00")){
            if((displayValue. indexOf(".") === -1) && (displayValue. indexOf("0") === 0)){
                console.log("swoos")
                displayValue = displayValue.substring(0, displayValue.length - 1);
            }
        }
        else if ((displayValue.indexOf("0") === 0) && ((displayValue.indexOf("1") === 1) || 
        (displayValue.indexOf("2") === 1) || (displayValue.indexOf("3") === 1) || (displayValue.indexOf("4") === 1)
        || (displayValue.indexOf("5") === 1) || (displayValue.indexOf("6") === 1) || (displayValue.indexOf("7") === 1)
        || (displayValue.indexOf("8") === 1) || (displayValue.indexOf("9") === 1))){
            displayValue = displayValue.substring(1);
        }
        console.log(displayValue)
        queue.push(displayValue)
        if (queue.length > 1){
            queue.shift();
        }
        console.log(queue)
        displayedNumber()
    }
}
