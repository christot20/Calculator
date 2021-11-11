function ops(e){
    console.log(e);
}

function nums(e){
    console.log(e);
}

function advOps(e){
    console.log(e);
}

function clearAll(e){
    console.log(e);
}

function clearOne(e){
    console.log(e);
}

const operBttn = document.querySelectorAll(".operatorButtons");
operBttn.forEach(bttn => bttn.addEventListener("click", ops)); 

const numBttn = document.querySelectorAll(".numberButtons");
numBttn.forEach(bttn => bttn.addEventListener("click", nums)); 

const othopBttn = document.querySelectorAll(".otherOperations");
othopBttn.forEach(bttn => bttn.addEventListener("click", advOps)); 

const clearBttn = document.querySelectorAll("#clear");
clearBttn.forEach(bttn => bttn.addEventListener("click", clearAll)); 

const delBttn = document.querySelectorAll("#delete");
delBttn.forEach(bttn => bttn.addEventListener("click", clearOne)); 