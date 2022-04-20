/////////////////// Maths /////////////////////

console.log("Min...")
console.log(Math.min(1,2,3,8,10,24,32,4,5,6,25,13,12))
console.log("Max...")
console.log(Math.max(1,2,3,8,10,24,32,4,5,6,25,13,12))
console.log("Absolute...")
console.log(Math.abs(-12.14)) ////// Will return positive even if value is given -ve.
console.log("aCos...")
console.log(Math.acos(0))
console.log("aCosh...")
console.log(Math.acosh(1))
console.log("aSin...")
console.log(Math.asin(1))
console.log("aSinh...")
console.log(Math.asinh(1))
console.log("aTan...")
console.log(Math.atan(1))
console.log("aTanh...")
console.log(Math.atanh(1))
console.log("aTan2...")
console.log(Math.atan2(3, 1))
console.log("cbrt...")
console.log(Math.cbrt(274))
console.log("ciel...")
console.log(Math.ceil(12.2))
console.log("floor...")
console.log(Math.floor(12.8))
console.log("sqrt...")
console.log(Math.sqrt(256))
console.log("Cos...")
console.log(Math.cos(1))
console.log("Cosh...")
console.log(Math.cosh(0))
console.log("Exp...")
console.log(Math.exp(2))
console.log("Log...")
console.log(Math.log(2))
console.log("Pow...")
console.log(Math.pow(2,5))
console.log("Random...")
console.log(Math.random())
console.log("Round...")
console.log(Math.round(5.2))
console.log("sign...")
console.log(Math.sign(4))
console.log(Math.sign(-4))
console.log(Math.sign(0))
console.log("sin...")
console.log(Math.sin(5.2))
console.log("sinh...")
console.log(Math.sinh(5.2))
console.log("tan...")
console.log(Math.tan(5))
console.log("tanh...")
console.log(Math.tanh(2))
console.log("trunc...")
console.log(Math.trunc(5.2)) //////// Returns only integer before decimal point


////////////// Math Properties ///////////////
console.log("Euler Number")
console.log(Math.E)
console.log("Natural Logartihm of 2...")
console.log(Math.LN2)
console.log("Natural Logartihm of 10...")
console.log(Math.LN10)
console.log("Base 2 Log of E...")
console.log(Math.LOG2E)
console.log("Base 10 Log of E...")
console.log(Math.LOG10E)
console.log("PI...")
console.log(Math.PI)
console.log("SQRT1_2...")
console.log(Math.SQRT1_2)
console.log("SQRT2...")
console.log(Math.SQRT2)



////////////////// Regular Expression //////////////////

console.log("Regular Expressions....")
let str = "Hello World of JS";
console.log(str.search('of')) ///////// Returns position of specified word or alphabet
console.log("Replaced...");
console.log(str.replace("JS", "JavaScript"));
let exp = new RegExp("This is RegExp.", "g");
console.log("Constructor...")
console.log(exp.constructor)
console.log("Global...")
console.log(exp.global) ///// Will return True only if "g" is set.
let exps = new RegExp("This is RegExp.", "i");
console.log("Ignore case...")
console.log(exps.ignoreCase) /////  Will return True only if "i" is set.
let expp = new RegExp("This is RegExp.", "m");
console.log("Multiline...")
console.log(expp.multiline) /////  Will return True only if "m" is set.
console.log("Source...")
console.log(expp.source)
let st = new RegExp('is')
console.log("Test method...")
console.log(st.test('This is good'))
console.log("Exec method");
console.log(/is/.exec("The is one")) //// Returns found text otherwise null or empty object
console.log("Last Index...")
console.log(expp.lastIndex)

//////// Brackets ///////
let text = 'He was eating cake in the cafe.';
let patt = 'ca[kf]e/g'
console.log(patt.match(text))


