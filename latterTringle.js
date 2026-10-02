let prompt = require("prompt-sync")();

let num = prompt("Enter your number -> ")

for (let i = 1; i <=num; i++) {
    let ascci = 65
    for (let k = 1; k <= i; k++) {
        process.stdout.write(String.fromCharCode(ascci)+" ")
        ascci++
    }    
    console.log();
    
}