//CLASS
class Conta{
    constructor(numero,cpf,saldo,logico,ativo)
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.logico = logico;
    this.ativo=ativo
}

ativar(){;
    this.ativo = true
}

Credito(valor){
    if(this.ativo){
        if(valor<=0){
            console.log("Impossivel realizar valor negativo")
        }
        else if(valor == 0){
            console.log("Impossivel realizar valor zerado")
        }
        this.saldo = this.saldo + valor;
    }
    else{
        console.log("Conta Inativa")
    }
}


Debito(valor){
    if(this.ativo){
        if(valor<=0){
            console.log("Impossivel realizar valor negativo")
        }
        else if(valor == 0){
            console.log("Impossivel realizar valor zerado")
        }
        else if(valor<=this.saldo){
            console.log("Saldo insuficiente...")
        }
        else{
            this.saldo = this.saldo - valor
        }
        
    }
    else{
        console.log("Conta Inativa")
    }
}

//PROGRMA PRINCIPAL

const leia = require("prompt-sync")()

let numero = parseInt(leia("Digite o numero da conta"))
let cpf = leia("Digite o cpf: ")
let c1 = new Conta(numero,cpf,0,false)
c1.ativar()
c1.Credito(100)
console.log("Saldo da conta R$ : "+ c1.saldo)