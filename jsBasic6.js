/////////////// Errors and Exceptions /////////////

function hello (x){
    // try{
//         if(x === y)
//         {console.log("All good." + x*2)
//         return x;
// }
        onerror = function (msg, url, line){
            console.error("Message: " + msg)
            console.error("URL Link: " + url)
            console.error("Line: " + line)
        
        }
        
    // }
    // catch (e) {
        // throw{
            //     name: "Func Error",
            //     message: "Error accurred"
            // };
            // throw e;
            // console.error("Error: " + e);
            
        }
        // finally{
            console.log("Finally all done")
        // }
    // }
    
    // function myFunc() {
//     var a = 100;
//     var b = 20;

//     try {
    //        if ( b == 0 ) {
        //           throw( "Divide by zero error." ); 
        //        } else {
            //           return c = a / b;
//        }
//     }
//     catch ( e ) {
    //        console.log("Error: " + e );
    //     }
    //  }

    
    let he = hello(4)
    console.log(he)