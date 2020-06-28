let currentResult=0
let logEntries=[]
let userInputValue=0

function getUserInput(){
    return parseInt(userInput.value)
}



function createReadAndWrite(operator,initialValue,enteredValue){
    const result= `${initialValue} ${operator} ${enteredValue}`
    outputResult(currentResult,'result is'+result)
    
}

function clearResult(){
    if(currentResult>0){
        currentResult=0
    }
        userInputs(currentResult)
        outputResult(currentResult,'result is'+currentResult)
    
}

function add(){
    const enteredNumber= getUserInput()
    const initialNumber=currentResult
    currentResult=currentResult+enteredNumber
    createReadAndWrite('+',initialNumber,enteredNumber)
    /*logEntries.push(enteredNumber)
    console.log(logEntries)*/
    /*const logEntry={
        operation:'ADD',
        result:enteredNumber
    }
    console.log(logEntry.operation)*/
    
}

function subtract(){
    const enteredNumber= getUserInput()
    const initialNumber=currentResult
    currentResult=currentResult-enteredNumber
    createReadAndWrite('-',initialNumber,enteredNumber)
    logEntries.push(enteredNumber)
    console.log(logEntries)
}

function multiply(){
   
    const enteredNumber= getUserInput()
    const initialNumber=currentResult
    currentResult=currentResult*enteredNumber
    createReadAndWrite('*',initialNumber,enteredNumber)
    logEntries.push(enteredNumber)
    console.log(logEntries)
}

function division(){
    const enteredNumber= getUserInput()
    const initialNumber=currentResult
    currentResult=currentResult/enteredNumber
    createReadAndWrite('/',initialNumber,enteredNumber)
    logEntries.push(enteredNumber)
    console.log(logEntries)
}

function equalbtn(){
    outputResult(currentResult,`final result is ${currentResult}`,currentResult)
}



function clearbtn(){
    clearResult()
}

addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',division)
equalBtn.addEventListener('click',equalbtn)
clearBtn.addEventListener('click',clearbtn)

//currentResult=add(1,2)
//const result=add(1,2)
//currentResult=result



