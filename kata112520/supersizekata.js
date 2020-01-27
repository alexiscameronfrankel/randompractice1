function superSize(num){
let numSplit = num.toString().split(""); 
let numSort = numSplit.sort(function(a, b){return b-a}).join("");
num = Number.parseInt(numSort,10);

return num;

}