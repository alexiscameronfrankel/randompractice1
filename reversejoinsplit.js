// Write a JavaScript function that reverse a number
// Example x = 32243;
// Expected Output : 34223

function reverseString(x) {
   let a = x.toString();
   let b = a.split(""); 
  //console.log(b);
  let c = b.reverse().join('');
  //console.log(c);
  let d = parseFloat(c); 
  console.log(d);
}

reverseString(32243)

//an easier way to convert a number into a string for the future 

let num = 6 + "";
console.log(6, num)

// Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(string) {

  let x = string.toLowerCase();
  console.log(x);

  let y = x.split('').reverse().join(''); 
  console.log(y);

  if(x === y) {return true;} else {return false;}
}

palindrome(`Radar`);