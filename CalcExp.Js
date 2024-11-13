const prompt = require('prompt-sync') ();
let base, exp, result =1 ;

base = parseInt(prompt("Informe a base da exponenciação: "));
exp = parseInt(prompt("Informe a expoente da exponenciação: "));

for(let i = 0; i < exp; i++){
    result *= base;
} 
console.log(`O resultado da exponenciação ${base}^${exp} = ${result}`);
