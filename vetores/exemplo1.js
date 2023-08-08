const leia = require("prompt-sync")()
let auxmat
let indice = -1
let matricula = ["M01","M02","M03","M04"]
let nome = ["Pedro","Paulo","Maria","Marcos"]
let nota = [0,0,0,0]

//Lista os dados na tela

console.log("MATICULA\tNOME\tNOTA")

for (let i = 0; i < matricula.length; i++){
    console.log(matricula[i]+"\t\t"+nome[i].toUpperCase()+"\t"+notas[i])
}

auxmat=leia('Digite a Matricula do Aluno: ').toUpperCase()
console.log(auxmat)

for (let i = 0; i < matricula.length; i++){
    if ( auxmat==matricula[i]){
    indice = i
}
}
if(indice!=-1){
    console.log("O aluno escolhido foi: "+nome[indice])
    nota[indice]=leia("Digite a nota do aluno de 0 a 10: ")
    if(nota[indice]<6){
    console.log(nome[indice]+" sua nota é "+nota[indice]+" Você esta de Rec")
    }
    else{
        console.log(nome[indice]+" sua nota é "+nota[indice]+" Você esta aprovado(a)")
    }
}
//Cadastra uma nota de aluno especifico
