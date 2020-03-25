// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n){
    let arr = []
    let i = n
    for(i; i > 0; i--){
      let a = n/i;
      if( a % 1 == 0){
      arr.push(i)}
    }
   return arr.length
}