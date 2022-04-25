//////////// Synchronus and Asynchronous /////////////
var fs = require('fs');

/////////// Synchronous ////////////

// console.log("This will print first...")
// async function sync(){
//     let wait = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log("This should print after 4 seconds. ")
//             resolve('Resolved')
//         }, 4000)
//     })

        
//     let word = await wait;
//     console.log(word);
// }
// sync()
// console.log("This will print on second line...")

// // a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// calling the async function
// asyncFunc();
////////////// Asynchronous //////////////

console.log("Non-Blocking code");

setTimeout(()=>{
    console.log("Print this line at end")
})
console.log("Printed on second line")