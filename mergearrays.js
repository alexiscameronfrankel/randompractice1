/* Write a function that combines two arrays by alternatingly taking elements from each array in turn.
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

function mergeArrays(a, b) {
  let newArr = []
  if (a === b){return a} 
  else {for(let i = 0; i < b.length || i < a.length; i++){
    if(a[i] !== undefined) {newArr.push(a[i])}
    if(b[i] !== undefined) {newArr.push(b[i])}
  }}
  
return newArr
  
}
