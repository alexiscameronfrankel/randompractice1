// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

const findAll = (array, n) => {
  let newArr = []
  let arrIndex = []
  
  for(let i = 0; i <= array.length; i++) {
    let indexArr = array.indexOf(n)
    if(indexArr != -1){
        arrIndex.push(indexArr)
        newArr.push(array.splice(indexArr,1,'I replace thee'))
    } 
  }
  return arrIndex
}

// HERE IS A WAY SMARTER WAY TO DO IT THAT IS NOT MINE

   // we have n, which is the target num we want to match with the numbers in the array
    // return an array of the matching indices
    // loop over the array, and check if n matches whatever index it's at
    // if n does match index number, then we push the index into result array
    // return result array
    // includes and indexOf

// const findAll = (array, n) => {
 
    // let results = [];
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i] === n) {
    //     results.push(i)
    //   }
    // }
    // return results
  
    
//   }