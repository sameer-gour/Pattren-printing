let prompt = require("prompt-sync")();

let num = prompt("Enter your number -> ")

for (let i = 1; i <=num; i++) {
    
    for (let k = 1; k <= i; k++) {
        process.stdout.write("*")
        
    }    
    console.log();
    
}