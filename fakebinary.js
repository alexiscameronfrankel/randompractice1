//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
x = x.split(``)
let a = x.join(``);
var f = a.replace(/1|2|3|4/g, "0");
var res = f.replace(/5|6|7|8|9/g, "1");
return res
}
