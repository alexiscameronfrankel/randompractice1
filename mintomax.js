// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    let a = arr.sort((a, b) => a - b);
    let b =[a[0], a[a.length-1]]
    return b
   
   };