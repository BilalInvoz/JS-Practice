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


////////////// Arrays ///////////////

console.log("Every function for array")
let arr1 = [1,2,3,4,5];
let arr2 = ['Ali', 'Jamil', 'Ahmad']
console.log(arr1.concat(arr2));
console.log("Every method...")
console.log(arr1.every(arr)); ///////// Every to check if condition is true on all elements

function arr(val){
    if(val % 1 == 0){
        return true
        
    }
}

console.log(arr2.indexOf('i'))
console.log(arr1.join(arr2));

console.log("Filter method...")
console.log(arr1.filter(fill));
function fill(val){
    return val > 2
}

let nums = [20,24,26,28,37,11,42,39,17];
console.log(nums.forEach(fills));

function fills(val){
    if(val % 2 == 0){
        console.log(val)
        // return val
    }
}


console.log("Map Method...");
let numarr = [1,2,3,4,5];
let numarr2 = numarr.map(mul);
console.log(numarr2)

console.log("Reduce method...")
// let ars = ['ali', 'amad', 'jamil']
let numar3 = numarr.reduce(myFun);
console.log(numar3)

function mul(val){
    return val * 4;
}

function myFun(sum, val){
    return sum + val;
}

console.log("Pop method...");
console.log(numarr.pop())
console.log(numarr)
console.log("Push method...")
console.log(numarr.push(20))
console.log(numarr)
console.log("Some method...");
function myFunction(val){
    return val > 2;
    // return val > 30;

}
console.log(numarr.some(myFunction))
console.log(numarr)
console.log("Find Method...")
console.log(numarr.find(myFunction)); ////// Returns first element of an array which satisifes condition

console.log("Reverse Method...");
console.log(numarr.reverse())
console.log(numarr.sort())
console.log(numarr.splice(1,3))
console.log("Shift Method...")
let arrd = [2,5,8,7,9]
console.log(arrd.shift())
console.log(arrd)
console.log("Unshift method...")
console.log(arrd.unshift(3))
console.log(arrd)

//////////////// Dates ////////////////////
console.log("Dates")
let day = new Date();
console.log(day)
console.log(day.getFullYear())
console.log(day.setFullYear(2025))
console.log(day.getFullYear())
console.log(day.getDate())
console.log(day.getDay())
console.log(day.getHours())
console.log(day.setHours(20))
console.log(day.getHours())
console.log(day.getMonth())
console.log(day.setMonth(4))
console.log(day.getMonth())
console.log(day.setTime(152102))
console.log(day.getTime())
console.log(day.getMinutes())
console.log(day.getSeconds())
console.log(day.getMilliseconds())
console.log(day.getTimezoneOffset())
console.log(day.getUTCHours())
console.log(day.getUTCDate())








