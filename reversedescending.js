// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  let numberToString = `${n}`.split("")
  let sorted = numberToString.sort((a, b) => b - a)
  let joined = sorted.join('')
  joined = parseInt(joined, 10);
  return joined
}