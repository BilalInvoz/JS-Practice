////////////// Objects ///////////////

let obj = {
    name: "Ali",
    age: 20,
    role: "Js Dev"
}

console.log(obj);

////////////// Constructor functions //////////////

///////// Also assignig method /////////
function novel(title, author){
    this.titleName = title;
    this.authorName = author;
    this.price = addPrice;
}

/////// addPrice function will be assigned in novel function ////////
function addPrice(amount){
    this.charges = amount;
}

var reading = new novel("Bid day", "John Smith");
reading.price("$100");
console.log(reading);


//////////// Same thing with the "with" keyword //////////////

function novel(title, author){
    this.titleName = title;
    this.authorName = author;
    this.price = addPrice;
    this.charges = 0;
}
function addPrice(amount){
    with(this){
        charges = amount;
    }
}
var reading = new novel("Bid day", "John Smith");
novel.prototype.price = null;
reading.price("$100");
console.log(reading);




///////////// Numbers Methods /////////////

console.log("Exponential form...")

let num = 20.254;
let val = num.toExponential(2);
console.log(val)

console.log("To Fixed form...")

val = num.toFixed(2)
console.log(val)

console.log("To Local String form...")

val = num.toLocaleString()
console.log(val)

console.log("To Precision form...");
val = num.toPrecision()
console.log(val)

console.log("To String form...");
val = num.toString()
console.log(val)

console.log("Value of form...");
val = num.valueOf()
console.log(val)

var game = new Boolean(false);
console.log(game)


///////////////// Strings /////////////////

console.log("Char at: ");
let guts = "Good Thing"
console.log(guts.charAt(5));
console.log(guts.charCodeAt(5));

let sun = "Shine Best";
let join = guts.concat(sun);
console.log(join);

console.log(guts.indexOf('Thing')); ///// index for whole word
console.log(guts.indexOf('d')); ////////// index for single alphabet
console.log(sun.lastIndexOf('s')) //////// returns index no of character
console.log(guts.localeCompare("Good Thing")) ////// Compares with original string
console.log(guts.match(sun))//// returns an array if true otherwise false
console.log("New word formed is: " + sun.replace('Shine', 'All')) ////// For replacing content of your own choice
console.log(sun.slice(1, -4))
console.log(guts.split("", 3)) ////// Will split into separate chars or till index of choice
console.log(sun.substring(1,8));
console.log(sun.toLocaleLowerCase());
console.log(sun.toLowerCase());
console.log(guts.toLocaleUpperCase());
console.log(guts.toUpperCase());
console.log("Returning strings in form of tags as...")
console.log(guts.anchor("hello"))
console.log(sun.big());
console.log(sun.blink())
console.log(guts.bold())
console.log(guts.fixed())
console.log(sun.fontcolor('red'))
console.log(sun.fontsize(5))
console.log(sun.italics(3))
let url = "http://localhost:8080";
console.log(guts.link(url))
console.log(sun.small())
console.log(sun.strike())
console.log(sun.sub())
console.log(guts.sup())




