/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.*/

function abbrevName(name){

 let nameSplit = name.split(``) 
 let secondInitial = nameSplit.indexOf(` `) + 1
 let together = nameSplit[0] + `.` + nameSplit[secondInitial]
 return together.toUpperCase()
 

}
