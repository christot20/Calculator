// function ops(e){
//     console.log(e);
//     console.log(ansNumArray.length)
//     console.log(ansNumArray)
//     x = ""
//     for (i = 0; i < numArray.length; i++){
//         x += numArray[i];
//     }
//     opNumArray.push(x);
//     console.log(opNumArray);
//     numArray.splice(0,numArray.length)
//     let index = opNumArray.indexOf("");
//     if (index !== -1) {
//         opNumArray.splice(index, 1);
//     }
//     if (e.target.textContent === "*"){
//         if (ansNumArray.length === 1){
//             answer = ansNumArray[0]*opNumArray[opNumArray.length-1]
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else if (ansNumArray.length > 1){
//             answer = ansNumArray[ansNumArray.length-1]*opNumArray[opNumArray.length-1]
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else{
//             operator = "x"
//             return operator
//         }
//     }
//     else if (e.target.textContent === "/"){
//         if (ansNumArray.length === 1){
//             answer = ansNumArray[0]/opNumArray[opNumArray.length-1]
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else if (ansNumArray.length > 1){
//             answer = ansNumArray[ansNumArray.length-1]/opNumArray[opNumArray.length-1]
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else{
//             operator = "/"
//             return operator  
//         }
//     }
//     else if (e.target.textContent === "+"){
//         if (ansNumArray.length === 1){
//             answer = parseInt(ansNumArray[0])+parseInt(opNumArray[opNumArray.length-1])
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else if (ansNumArray.length > 1){
//             answer = parseInt(ansNumArray[ansNumArray.length-1])+parseInt(opNumArray[opNumArray.length-1])
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else{
//             operator = "+"
//             return operator
//         }
//     }
//     else if (e.target.textContent === "-"){
//         if (ansNumArray.length === 1){
//             answer = ansNumArray[0]-opNumArray[opNumArray.length-1]
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else if (ansNumArray.length > 1){
//             answer = ansNumArray[ansNumArray.length-1]-opNumArray[opNumArray.length-1]
//             console.log(answer);
//             ansNumArray.push(answer);
//             return answer
//         }
//         else{
//             operator = "-"
//             return operator
//         }
//         } 
//     else{
//         if (operator === "-"){
//             if (ansNumArray.length === 1){
//                 answer = ansNumArray[0]-opNumArray[opNumArray.length-1]
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else if (ansNumArray.length > 1){
//                 answer = ansNumArray[ansNumArray.length-1]-opNumArray[opNumArray.length-1]
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else{
//                 answer = opNumArray[opNumArray.length-2]-opNumArray[opNumArray.length-1];
//                 console.log(answer);
//                 //opNumArray.splice(0,opNumArray.length)
//                 ansNumArray.push(answer);
//                 return answer
//             }
//         }
//         else if (operator === "+"){
//             if (ansNumArray.length === 1){
//                 answer = parseInt(ansNumArray[0])+parseInt(opNumArray[opNumArray.length-1])
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else if (ansNumArray.length > 1){
//                 answer = parseInt(ansNumArray[ansNumArray.length-1])+parseInt(opNumArray[opNumArray.length-1])
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else{
//             answer = parseInt(opNumArray[opNumArray.length-2])+parseInt(opNumArray[opNumArray.length-1]);
//             console.log(answer);
//             //opNumArray.splice(0,opNumArray.length)
//             ansNumArray.push(answer);
//             return answer
//             }
//         }
//         else if (operator === "/"){
//             if (ansNumArray.length === 1){
//                 answer = ansNumArray[0]/opNumArray[opNumArray.length-1]
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else if (ansNumArray.length > 1){
//                 answer = ansNumArray[ansNumArray.length-1]/opNumArray[opNumArray.length-1]
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else{
//                 answer = opNumArray[opNumArray.length-2]/opNumArray[opNumArray.length-1];
//                 console.log(answer);
//                 //opNumArray.splice(0,opNumArray.length)
//                 ansNumArray.push(answer);
//                 return answer
//             }
//         }
//         else if (operator === "x"){
//             if (ansNumArray.length === 1){
//                 answer = ansNumArray[0]*opNumArray[opNumArray.length-1]
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else if (ansNumArray.length > 1){
//                 answer = ansNumArray[ansNumArray.length-1]*opNumArray[opNumArray.length-1]
//                 console.log(answer);
//                 ansNumArray.push(answer);
//                 return answer
//             }
//             else{
//                 answer = opNumArray[opNumArray.length-2]*opNumArray[opNumArray.length-1];
//                 console.log(answer);
//                 //opNumArray.splice(0,opNumArray.length)
//                 ansNumArray.push(answer);
//                 return answer
//             }
//         }
//     }
// }
// let numArray = [];
// let opNumArray = [];
// let ansNumArray = [];
// function nums(e){
//     let number = "";
//     console.log(e);
//     let x = e.target.textContent;
//     number += x;
//     console.log(number);
//     numArray.push(number);
//     console.log(numArray);
// }

// function advOps(e){
//     console.log(e);
// }

// function clearAll(e){
//     console.log(e);
// }

// function clearOne(e){
//     console.log(e);
// }

// const operBttn = document.querySelectorAll(".operatorButtons");
// operBttn.forEach(bttn => bttn.addEventListener("click", ops)); 

// const numBttn = document.querySelectorAll(".numberButtons");
// numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 

// const othopBttn = document.querySelectorAll(".otherOperations");
// othopBttn.forEach(bttn => bttn.addEventListener("click", advOps)); 

// const clearBttn = document.querySelectorAll("#clear");
// clearBttn.forEach(bttn => bttn.addEventListener("click", clearAll)); 

// const delBttn = document.querySelectorAll("#delete");
// delBttn.forEach(bttn => bttn.addEventListener("click", clearOne)); 

//old code

//other old code


// const adder = document.querySelector("#add");
// const sub = document.querySelector("#sub");
// const div = document.querySelector("#div");
// const mult = document.querySelector("#mult");
// const eq = document.querySelector("#eq");
// eq.addEventListener("click", operate)
// mult.addEventListener("click", multi)
// adder.addEventListener("click", added)
// sub.addEventListener("click", subber)
// div.addEventListener("click", divide)


// function added(){
//     operator = "+"
//     if (numArray.length < 2){
//         numArray.push(displayValue2)
//         return operator
//     }
//     else{
//         a = parseFloat(displayValue)
//         b = parseFloat(displayValue2)
//         console.log(a+b)
//         return a+b
//     }
// }
// function subber(){
//     operator = "-"
//     if (numArray.length < 2){
//         numArray.push(displayValue2)
//         return operator
//     }
//     else{
//         a = parseFloat(displayValue)
//         b = parseFloat(displayValue2)
//         console.log(a-b)
//         return a-b
//     }
// }
  
// function multi(){
//     operator = "*"
//     if (numArray.length < 2){
//         numArray.push(displayValue2)
//         return operator
//     }
//     else{
//         a = parseFloat(displayValue)
//         b = parseFloat(displayValue2)
//         console.log(a*b)
//         return a*b
//     }
// }
  
// function divide(){
//     operator = "/"
//     if (numArray.length < 2){
//         numArray.push(displayValue2)
//         return operator
//     }
//     else{
//         a = parseFloat(displayValue)
//         b = parseFloat(displayValue2)
//         console.log(a/b)
//         return a/b
//     }
// }
// function operate(){
//     if (operator === "+"){
//         console.log(parseFloat(added()));
//         return parseFloat(added());
//     }
//     else if (operator === "-"){
//         return parseFloat(subber());
//     }
//     else if (operator === "*"){
//         return parseFloat(multi());
//     }
//     else{
//         return parseFloat(divide());
//     }
// }
// //ask for help in trying to find a way to get the 2 values to work with using the queryselector
// //have the click give you the operator BUT ONLY CALL IT ON THE EQUALS SIGN CLICK
// let ansArray = [];
// let numArray = [];
// displayValue = ""
// displayValue2 = ""
// function nums(e){
//     console.log(e);
//     let x = e.target.textContent;
//     if (numArray.length <= 1){
//         displayValue += x;
//         console.log("d1"+displayValue);
//         numArray.push(displayValue)
//         numArray.splice(0,numArray.length-1)
//         console.log(numArray)
//     }
//     else{
//         displayValue2 += x;
//         console.log("d2"+displayValue2);
//         numArray.push(displayValue2)
//         numArray.splice(1, 1)
//         console.log(numArray)
//     }
// }

// const numBttn = document.querySelectorAll(".numberButtons");
// numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 

// // const othopBttn = document.querySelectorAll(".otherOperations");
// // othopBttn.forEach(bttn => bttn.addEventListener("click", advOps)); 

// // const clearBttn = document.querySelectorAll("#clear");
// // clearBttn.addEventListener("click", clearAll); 

// // const delBttn = document.querySelectorAll("#delete");
// // delBttn.addEventListener("click", clearOne); 

// //newer code

const othopBttn = document.querySelectorAll(".otherOperations");
othopBttn.forEach(bttn => bttn.addEventListener("click", advOps)); 

const operBttn = document.querySelectorAll(".operatorButtons");
operBttn.forEach(bttn => bttn.addEventListener("click", ops)); 

//move adv ops to call ops instead and write them there, u moved the eq sign to ops here

const numBttn = document.querySelectorAll(".numberButtons");
numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearAll); 

const delBttn = document.querySelector("#delete");
delBttn.addEventListener("click", clearOne); 

const displayedAnswer = document.getElementById("answer");
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


// const buttons = document.querySelectorAll("button")
// buttons.forEach(bttn => bttn.addEventListener("click", displayedNumber)); 

displayedAnswer.textContent = 0;
function displayedNumber(){
    console.log("sus")
    if (queue.length === 0){
        displayedAnswer.textContent = 0
        // if (divide() === "No >:)"){
        //     console.log("fgjfjgjfjfg")
        //     displayedAnswer.textContent = "No >:)"
        // }
    }
    else if ((queue.length === 2 && displayValue2 === "") || (queue.length === 1)){
        displayedAnswer.textContent = queue[0]
    }
    else{
        displayedAnswer.textContent = queue[1]
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
    // if (queue.length === 2 && displayValue2 === ""){
    //     console.log(e)
    //     x = queue[0].toString()
    //     y = x.slice(0, x.length - 1);
    //     queue.splice(0,1,y)
    //     console.log(queue[0])
    //     console.log(queue)
    //     return displayedNumber()
    // }
    if(queue.length === 1){
        if (displayValue.length >= 15){
            numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 
            //decimal.addEventListener("click", nums)
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
            //decimal.addEventListener("click", nums)
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

//python thing print(chr(hex(77))) to do conversion from hex to english!@!@!@!@!@!@

//now just see if u can add any extra features
function advOps(e){
    // //console.log(e)
    // if (e.target.textContent === "x^y"){
    //     console.log(e)
    //     if (queue.length === 2 && displayValue2 !== ""){
    //         queue[1] = Math.pow(queue[1], displayValue2)
    //     }
    //     // else{

    //     // }
    // }
    if (e.target.textContent === "+/-"){
        console.log(queue)
        console.log(e)
        if (queue.length === 2 && displayValue2 === ""){
            queue.pop()
            powerVal = parseFloat(queue[0]*(-1))
            //queue.shift()
            console.log(queue)
            return queue[0]*(-2)
        }
        else{

        }
    }
    // else if (e.target.textContent === "x!"){
    //     console.log(e)
    //     if (queue.length === 2 && displayValue2 !== ""){

    //     }
    //     else{

    //     }
    // }
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
    if (queue[1] === 0 || queue[1] === "0"){
        queue = []
        // displayedAnswer.textContent = "No >:)";
        // console.log(displayedAnswer.textContent)
        // return displayedAnswer.textContent
    }
    newdisplayValue = parseFloat(queue[0])/parseFloat(queue[1])
    queue.push(Math.round(1000*newdisplayValue)/1000)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
function operate(){
    if (operators === "+"){
        console.log(addition())
        addition()
        queue.splice(-1,1)
        queue.push(displayValue2)
        console.log(queue)
        return displayedNumber()
    }
    else if (operators === "-"){
        console.log(subtraction())
        subtraction()
        queue.splice(-1,1)
        return displayedNumber()
    }
    else if (operators === "*"){
        console.log(multiply())
        multiply()
        queue.splice(-1,1)
        return displayedNumber()
    }
    else if (operators === "/"){
        console.log(divide())
        divide()
        queue.splice(-1,1)
        return displayedNumber()
    }
}

operators = ""
function ops(e){
    decimal.addEventListener("click", nums)
    console.log(e)
    //console.log(j)
    //console.log(typeof e.target.textContent)
    if (typeof e !== "undefined" || typeof j === "undefined"){
        console.log("fhhhghgh")
        typeof j === "undefined"
        y = e.target.textContent
    }
    else if(typeof j !== "undefined" || typeof e === "undefined"){ //find a way to get j back to undefined
        typeof e === "undefined"                          //the keys vertake the buttons when clicked
        y = j                                             // fix it for the numbers and operators
    }
    // else{
    //     y = j
    // }
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


//ask for help in trying to find a way to get the 2 values to work with using the queryselector
//have the click give you the operator BUT ONLY CALL IT ON THE EQUALS SIGN CLICK
queue = []
displayValue = ""
displayValue2 = "" 
//add limit to how long input is, have large numbers be in scientfic notation
//have 0 not be allowed as first number

//fimd way to have eventlistnerr exist before nums, leave when its called, come bck on operate function, etc
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
    if (typeof e !== "undefined" || typeof n === "undefined"){
        console.log("fhhhghgh")
        typeof n === "undefined"
        x = e.target.textContent
    }
    else if(typeof n !== "undefined" || typeof e === "undefined"){ //find a way to get j back to undefined
        typeof e === "undefined"                          //the keys vertake the buttons when clicked
        x = n                                           // fix it for the numbers and operators
    }
    decimal.addEventListener("click", nums)
    
    console.log(e);
    //let x = e.target.textContent;
    console.log(x)
    if (operators !== ""){
        if (displayValue2.includes(".")){
            if (x === "."){
                x = ""
            }
        }
        for (i = 0; i < displayValue2.length; i++){
            if(displayValue2.length === 15){   //try removing the items like how u did for 0 and .
                numBttn.forEach(bttn => bttn.removeEventListener("click", nums)); 
                decimal.removeEventListener("click", nums);
                displayValue2 = displayValue2.substring(0, displayValue2.length - 1);
            }
        }
        console.log("h")
        // decimal.addEventListener("click", nums)
        // if (x !== "." && displayValue2 === ""){
        //     displayValue2 = ""
        // }
        displayValue2 += x
        console.log(displayValue2)
        // if (x === "0" && queue.length === 2 && displayValue2 === "00"){
        //     console.log("swaos")
        //     displayValue2 = "0" 
        // }
        // else if(x === "0" && queue.length === 1){
        //     displayValue2 = "0"
        // }
        // else{                                                       add decimal remover, scientific notation answers, and string limits for number inputs
        //     displayValue2 += x 
        // }
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
            //delete the first value so zero is gone and then work on limoting how mnay #s
            displayValue2 = displayValue2.substring(1);
        }
        console.log(displayValue2)
        if (queue.length === 2){
            queue.splice(-1,1);
        }
        queue.push(displayValue2)
        console.log(queue)
        //decimal.addEventListener("click", nums)
        displayedNumber()
    }
    else{
        // if (x !== "." && displayValue === "0"){
        //     displayValue = ""
        // }
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
        // if (x === "0" && queue.length === 0){
        //     console.log("swaos")
        //     displayValue = "0" 
        // }
        // else if(x === "0" && displayValue === "00"){
        //     console.log("hhqhwqh")
        //     displayValue = "0" 
        // }
        // else{
        //     displayValue += x
        // }
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
            //delete the first value so zero is gone and then work on limoting how mnay #s
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

//make it so that the actual number is displayed (first number of array)
//add other operations (put operation on number and put number in next line and delete number before it)
//make it so decimal points are rounded out and can only support to a limit
//make it so e05 blah blah numbers are added
//find a way to stop zeros from being used if 0 is already there 
//(either check somehow if there is a zero in front of other stuff or use the fact that answer display = 0 as a conditional that 0 cant be used and delete it or stop it from being pressed)


