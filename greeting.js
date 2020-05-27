// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function(name) {

let allSmall = name.toLowerCase()
let who = allSmall.charAt(0).toUpperCase() + allSmall.slice(1)
return `Hello ${who}!` 

};