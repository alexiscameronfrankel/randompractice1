// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let i = 0 
  let counter = 0 
  let newArr = []
  for(i; i < num; i++){
    counter += 1
    newArr.push(counter)
  }

return newArr.reduce((a, b) => a + b, 0)
}
