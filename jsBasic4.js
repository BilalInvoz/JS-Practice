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
reading.price("$100");
console.log(reading);
