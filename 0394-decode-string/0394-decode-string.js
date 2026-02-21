/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numberStack = [];
    let stringStack = [];
    let currentStr = "";
    let currentNum = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + Number(char);
        } 
        else if (char === "[") {
            numberStack.push(currentNum);
            stringStack.push(currentStr);
            currentNum = 0;
            currentStr = "";
        } 
        else if (char === "]") {
            let repeatTimes = numberStack.pop();
            let prevStr = stringStack.pop();
            currentStr = prevStr + currentStr.repeat(repeatTimes);
        } 
        else {
            currentStr += char;
        }
    }

    return currentStr;
};