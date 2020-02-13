function highAndLow(numbers){
let seperateNum = numbers.split(" ");
let sortNum = seperateNum.sort(function(a, b){return a-b});
let sortNumFirst = (sortNum[0])
let sortNumLast = sortNum.length - 1
return (sortNum[sortNumLast] + " " +  sortNumFirst)
}

//a function to sort from highest to lowest numbers 