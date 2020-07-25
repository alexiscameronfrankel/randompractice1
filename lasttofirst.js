// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
  let a = str.split(` `)
  return a[1] + ` ` + a[0]
}
