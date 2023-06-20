const leia = require("prompt-sync")()

let aluno1
let aluno2
let Nota1
let Nota2

aluno1 = leia("Nome do aluno 1 : ")
Nota1 = parseInt(leia("Nota do aluno 1 : "))
aluno2 = leia("Nome do aluno 2 : ")
Nota2 = parseInt(leia("Nota do aluno 2 : "))

if(Nota1>=5){
    console.log("Olá "+aluno1+" aprovado");
}
else{
    console.log("Olá "+aluno1+" reprovado");
}
if(Nota2>=5){
    console.log("Olá "+aluno2+" aprovado");
}
else{
    console.log("Olá "+aluno2+" reprovado");
}