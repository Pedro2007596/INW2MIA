class Pessoa{
    constructor(cpf, nome, anoNascimento){
        this.cpf = cpf
        this.nome = nome
        this.anoNascimento = anoNascimento
    }
}

mostraIdade();{
    console.log("Idade : "+(2023-this.anoNascimento))
}

//programa pricipal

const leia = require("prompt-sync")()

let p1 = new Pessoa("000.111.222-33","Marcos",2006)
let p2 = new Pessoa("111.222.333-44","Maria",2006)
console.log(p1)
p1.mostraIdade()