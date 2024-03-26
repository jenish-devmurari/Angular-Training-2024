let flag = false;
const operators = ['+', '-', '*', '/'];
let expressionData = "";
let resultData = "";
const historyData = [];

const inputBox = document.getElementById("result");

const clearDisplay = () => {
    inputBox.value = "";
}

const display = (value1) => {

    if (flag) {
        inputBox.value = "";
        flag = false;
    }

    const oldInput = inputBox.value;
    const lastChar = inputBox.value[inputBox.value.length - 1];

    if (operators.includes(lastChar) && operators.includes(value1)) {
        const newInput = inputBox.value.slice(0, -1) + value1;
        expressionData = newInput;
        inputBox.value = newInput;
    } else {
        const newInput = inputBox.value + value1;
        expressionData = newInput;
        inputBox.value = newInput;
    }

};

const calculate = () => {
    let ans = inputBox.value;
    try {
        let answer = eval(ans);
        inputBox.value = answer;
        resultData = answer;
        historyData.push({ "expression": expressionData, "result": resultData });
        expressionData = "";
        resultData = "";
        flag = true;
    } catch (error) {
        inputBox.value = "Error";
        flag = true;
    }
}

const deleteItem = () => {
    let deleteValue = inputBox.value;
    inputBox.value = deleteValue.slice(0, -1);
}


const history = () => {
    if (historyData.length == 0) {
        inputBox.value = "Empty";
        flag = true;
    } else {
        let logData = "";
        for (let i = 0; i < historyData.length; i++) {
            logData += "" + historyData[i]["expression"] + "=" + historyData[i]["result"] + ",";
        }
        inputBox.value = logData;
        flag = true;
    }
}

const dot = (value1) => {
    const lastCharIndex = inputBox.length - 1;
    const lastOperatorIndex = -1;
    const inputHasDot = inputBox.includes(".");

    for (let i = lastCharIndex; i >= 0; i--) {
        if (operators.includes(inputBox[i])) {
            lastOperatorIndex = i;
            break;
        }
    }

    if (lastOperatorIndex !== -1) {
        const subString = inputBox.substring( lastOperatorIndex + 1 );
        
        if (!subString.includes(".")) {
            inputBox.value += value1;
        }
    } else {
        if (!inputHasDot) {
            inputBox.value += value1;
        }
    }
 
}
