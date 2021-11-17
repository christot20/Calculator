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

const operBttn = document.querySelectorAll(".operatorButtons");
operBttn.forEach(bttn => bttn.addEventListener("click", ops)); 

const eq = document.querySelector("#eq");
eq.addEventListener("click", operate)

const numBttn = document.querySelectorAll(".numberButtons");
numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 

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
        return addition()
    }
    else if (operators === "-"){
        console.log(subtraction())
        return subtraction()
    }
    else if (operators === "*"){
        console.log(multiply())
        return multiply()
    }
    else if (operators === "/"){
        console.log(divide())
        return divide()
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
            // operate()
            // operators = "-"
            // return (operate())
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
    }
    else{
        displayValue += x
        console.log(displayValue)
        queue.push(displayValue)
        if (queue.length > 1){
            queue.shift();
        }
        console.log(queue)
    }
}


// const othopBttn = document.querySelectorAll(".otherOperations");
// othopBttn.forEach(bttn => bttn.addEventListener("click", advOps)); 

// const clearBttn = document.querySelectorAll("#clear");
// clearBttn.addEventListener("click", clearAll); 

// const delBttn = document.querySelectorAll("#delete");
// delBttn.addEventListener("click", clearOne); 
