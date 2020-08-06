//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let x = n.toString().split(``).reverse();
  let newArr = []
  let i = 0
 for(i; i < x.length; i++){
   newArr.push(parseInt(x[i], 10))
 }
  return newArr
}
