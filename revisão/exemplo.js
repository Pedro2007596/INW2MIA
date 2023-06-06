const leia = require("prompt-sync")()
let nome= leia("Digite seu nome : ")
let grausC = 0
let grausK = 0
grausC = parseInt(leia("Digite a temperatura em celcius : "))
grausK = (grausC + 273)
console.log("Oi "+nome+" a temperatura em kelvins é "+grausK+"Kelvins");
