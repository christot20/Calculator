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

// const buttons = document.querySelectorAll("button")
// buttons.forEach(bttn => bttn.addEventListener("click", displayedNumber)); 

displayedAnswer.textContent = 0;
function displayedNumber(){
    console.log("sus")
    if (queue.length === 0){
        displayedAnswer.textContent = 0
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
    if (queue.length === 2 && displayValue2 === ""){
        console.log(e)
        x = queue[0].toString()
        y = x.slice(0, x.length - 1);
        queue.splice(0,1,y)
        console.log(queue[0])
        console.log(queue)
        return displayedNumber()
    }
    else if(queue.length === 1){
        console.log(e)
        x = queue[0].toString()
        y = x.slice(0, x.length - 1);
        queue.splice(0,1,y)
        return displayedNumber()
    }
    else if (displayValue2 !== ""){
        console.log(e)
        x = queue[1].toString()
        y = x.slice(0, x.length - 1);
        queue.splice(1,1,y)
        console.log(queue)
        return displayedNumber()
    }
}
//python thing print(chr(hex(77))) to do conversion from hex to english!@!@!@!@!@!@

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
    queue.push(newdisplayValue)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
function subtraction(){
    newdisplayValue = parseFloat(queue[0])-parseFloat(queue[1])
    queue.push(newdisplayValue)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
  
function multiply(){
    newdisplayValue = parseFloat(queue[0])*parseFloat(queue[1])
    queue.push(newdisplayValue)
    queue.shift()
    displayValue2 = ""
    return newdisplayValue
}
  
function divide(){
    newdisplayValue = parseFloat(queue[0])/parseFloat(queue[1])
    queue.push(newdisplayValue)
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
    console.log(e)
    console.log(e.target.textContent)
    if (e.target.textContent === "+"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "+"
            return operators
        }
        else{
            return operators = "+"
        }
    }
    else if (e.target.textContent === "-"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "-"
            return operators
        }
        else{
            return operators = "-"
        }
    }
    else if (e.target.textContent === "*"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "*"
            return operators
        }
        else{
            return operators = "*"
        }
    }
    else if (e.target.textContent === "/"){
        if (queue.length === 2 && displayValue2 !== ""){
            operate()
            operators = "/"
            return operators
        }
        else{
            return operators = "/"
        }
    }
    else if (e.target.textContent === "="){
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
function nums(e){
    console.log(e);
    let x = e.target.textContent;
    if (operators !== ""){
        displayValue2 += x
        console.log(displayValue2)
        if (queue.length === 2){
            queue.splice(-1,1);
        }
        queue.push(displayValue2)
        console.log(queue)
        displayedNumber()
    }
    else{
        displayValue += x
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


