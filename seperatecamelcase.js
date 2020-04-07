// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
    let upperIndex = []
    let stringUpper = string.toUpperCase().split("")
    let stringSplit = string.split("")
     for (let i = 0; i < stringSplit.length; i++) {
       if(stringSplit[i] === stringUpper[i]) {
       upperIndex.push(i)
       }
    }
  for (let i = upperIndex.length -1; i >= 0; i--){
   stringSplit.splice(upperIndex[i],0, ' ');
 }
 
  return stringSplit.join('')
   
}

//there are simpler ways to do this with replace
// return(string.replace(/([A-Z])/g, ' $1'));
