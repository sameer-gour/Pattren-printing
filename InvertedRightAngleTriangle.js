let prompt = require("prompt-sync")();

let num = prompt("Enter your number -> ")

// for (let i = num; i >= 1; i--) {
    
//     for (let k = i; k >= 1; k--) {
       
//        process.stdout.write("* ")
        
//     }    
//     console.log();
    
// }

// seciond way 

// for (let i = 1; i <= num; i++) {
    
//     for (let k = 1; k <= num-i+1; k++) {
       
//        process.stdout.write("* ")
        
//     }    
//     console.log();
    
// }

//3r way

for (let i = 1; i <= num; i++) {
    
    for (let k = num; k >=i; k--) {
       
       process.stdout.write("* ")
        
    }    
    console.log();
    
}