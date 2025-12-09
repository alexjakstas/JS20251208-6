"use strict";

let totalTry = 4;
let a = +prompt("Įveskite išmesta skaičių: ");
let b = +prompt("Įveskite išmesta skaičių: ");
let c = +prompt("Įveskite išmesta skaičių: ");
let d = +prompt("Įveskite išmesta skaičių: ");
let array = [a, b, c, d];

let countSum = 0;

for(let index = 0; index < array.length; index++  ){
countSum += array[index];
}

let maxResult = totalTry * 6;
let result;
if(countSum >= 12 ){
result = "Loterija laimėta";
}
else{
    result = "Loterija pralaimėta"
}

function calculateAverage(array){
let sum = 0;
let i = 0;
while(i < array.length){
    sum +=array[i];
    i++;
}
return sum / array.length;
}
const average = calculateAverage(array);


document.getElementById("maxResult").innerHTML = maxResult;
document.getElementById("countSum").innerHTML = countSum;
document.getElementById("average").innerHTML = average;
document.getElementById("result").innerHTML = result;
