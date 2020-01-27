function disemvowel(str) {

let a = str.replace(/e/gi, "");
let b = a.replace(/i/gi, "");
let c= b.replace(/o/gi,"");
let d= c.replace(/a/gi,"");
str= d.replace(/u/gi,"");

return str;

}