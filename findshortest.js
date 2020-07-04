/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/

function findShort(s){
  let x = s.split(` `);
  let i = 0; 
  let newArray = []
  for(i; i < x.length; i++){
   
    newArray.push(x[i].length)

  }
  newArray.sort((a, b) => a - b);
  return newArray[0]
}

