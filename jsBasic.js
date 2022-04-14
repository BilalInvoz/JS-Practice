////////////// Syntax ////////////
////////////// First JS Code ///////////
console.log("Here is first random basic code for js")
function Sum(a, b, c){
      return a + b + c;
}
let sum = Sum(5,6,7);
console.log(sum);

////////////// Semi Colons are optional /////////////

console.log("JS is flexible in case of semicolons")
console.log("JS can also work without semicolons");

////////////// Comments in JS ////////////////
////// Comments are very basic in JS and have syntax like: 
// -For Single line: //   
// -For multiline: /* */

///////////// Operators ///////////////
////////// Mathematical Operators //////////
function Maths(a, b){
    return [a+b, a-b, a*b, a/b, a%b];
}
let res = Maths(10, 20)
console.log(res);

//////////// Logical Operators /////////////
let arr = 5;
let brr = 6;
if(arr == 5 && brr == 6){
    console.log("True values");
}
if(arr != 3){
    console.log("False info");
}
if(arr == 1 || brr == 6){
    console.log("Both must be satisfying.")
}

/////////// Assignment Operator //////////////
let ad = 5;
let ba = 6;
console.log(ad, ba)

////////////// Comparison Operator ////////////
let ads = 20;
let bds = 22;
if(ads > bds){
    console.log("False")
}
if(ads < bds){
    console.log("True")
}
if(ads == bds){
    console.log("Not equal");
}