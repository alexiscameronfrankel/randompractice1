//clearly there's way better methods to use...ex: function solution(str, ending){ return str.endsWith(ending); }
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    let strSplit = str.split("")
    let endingSplit = ending.split("")
    console.log(strSplit)
    console.log(endingSplit)
    let endingSplitLength = endingSplit.length
    console.log(endingSplit[endingSplit.length-1])
    console.log(strSplit[strSplit.length-1])
  if( ending.length === 0){return true}
  if(str === ending){
  return true} 
  else if (strSplit[0] === endingSplit[0]){
  return false}
  else if (str.includes(ending) && endingSplit[endingSplit.length-1] === strSplit[strSplit.length-1]){
  return true}
  else if (!str.includes(ending) || endingSplit[endingSplit.length-1] != strSplit[strSplit.length-1] ){
  return false}
  }