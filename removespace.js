// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){ 
  x =  x.split(``)
  let i = 0 
  let newArray = []
  for(i; i < x.length; i++){
   
    if(x[i] != ' '){
      newArray.push(x[i])
    }
  
  }
  
  return newArray.join(``)
}
