//  I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {

  let i = 0 
  let sum = 0
  let sum2 = 0
  for(i; i < arr1.length; i++){
   sum += arr1[i]
  }
  
  for(let a = 0; a < arr1.length; a++){
   sum += arr2[a]
  }

return sum

}
