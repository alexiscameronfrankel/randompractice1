/* let userInput = prompt("Write text here!")
let textLeft = 140 - userInput.length TELL USER HOW MUCH TEXT THEY HAVE LEFT
 alert(userInput.slice(0,140)) CUTS OFF AT 140*/

// FIX NAME WITH SLICE METHOD
let nameInput = prompt("Write name here!")
let x = nameInput.toUpperCase()
let y = x.slice(0,1) + x.slice(1,nameInput.length).toLowerCase()
console.log(y)