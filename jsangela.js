//switch around the values of the variables without redeclaring variable or typing any numbers

function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:

var c = Number(a) + Number(b) 
a = c - Number(a)
b = c - Number(b)
    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}


//could also be done var c = a , var a = b, var b = c