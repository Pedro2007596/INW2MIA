//CLASS
class Conta{

    constructor(numero,cpf,saldo,logico,ativo){
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.logico = logico;
    this.ativo=ativo
}
}

ativar();{
    this.ativo = true
}

Credito(valor);{
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


Debito(valor);{
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

class Poupanca extends Conta{
    constructor(numero,cpf,saldo,logico,ativo,diaAniversarioPoupanca){
    super(numero,cpf,saldo,logico,ativo);
    this.diaAniversarioPoupanca = diaAniversarioPoupanca;
}
correcao(dia){
    if(dia == this.diaAniversarioPoupanca){
        this.Credito(this.saldo*0.05)
        }
    }
}

class corrente extends Conta{
    constructor(numero,cpf,saldo,logico,ativo,ContadorTalao){
        super(numero,cpf,saldo,logico,ativo);
        this.ContadorTalao=ContadorTalao
    }
    PedirTalao(qtde){
        if(qtde>this.ContadorTalao){
            console.log("impossivel realizar, quantidade indisponivel")
        }

        else if((qtde*30)>this.saldo){
            console.log("impossivel realizar, quantidade indisponivel")
        }

        else{
            console.log("Emitindo talão....")
            this.ContadorTalao= this.ContadorTalao - qtde
        }
        console.log("Talões atuais disponiveis" + this.ContadorTalao)
        console.log("Saldo Atual conta R$ :" + this.saldo)
    }
}

class corrente extends Conta{
    constructor(numero,cpf,saldo,logico,ativo,Limite){
        super(numero,cpf,saldo,logico,ativo);
        this.Limite=Limite
    }
    usarlimite(valor){
        if(valor>this.Limite){
            console.log("Impossivel realizar, limite indisponivel")
        }
        else{
            this.Limite = this.Limite - valor
            this.Credito(valor)
        }

    }
}

//PROGRMA PRINCIPAL

const leia = require("prompt-sync")()
let op = ""
do{
    console.log("Bank")
    console.log("O Banco do 2MIA\n")
    console.log("1- Conta poupança")
    console.log("2- Conta corrente")
    console.log("3- Conta especial")
    console.log("4- sair")
    op = leia("digite o numero da sua opção : " )
    if (op == "1"){
        console.log("Bank")
        console.log("O Banco do 2MIA\n")
        console.log(" Conta poupança")
        let numero = leia ("Digite o numero da conta : ")
        let cpf = leia("Digite o cpf da conta : ")
        let diaAniversarioPoupanca = leia("Digite o dia de niver da conta")
        let cp1 = new Poupanca(numero,cpf,0,false,diaAniversarioPoupanca)
        for(let x=1 ; x<=10 ; x++){
            valor = parseInt(leia("Digite o valor : "))
            opcao = leia("Digie C para crédito e D para debito")
            if( opcao == "C"){
                cp1.Credito(valor)
            }
            else if(opcao == "D"){
                cp1.Debito(valor)
            }
            console.log("Saldo atual da conta : "+cp1.saldo)
        }
        let Dia = leia("Digite o dia de hoje : ")
        cp1.correcao(dia)
        console.log("Saldo atual da conta"+cp1.saldo)
            
    }
    
    
    else if (op == "2"){
        console.log("Bank")
        console.log("O Banco do 2MIA\n")
        console.log(" Conta Corrente")
        let numero = leia ("Digite o numero da conta : ")
        let cpf = leia("Digite o cpf da conta : ")
        let cp1 = new corrente(numero,cpf,0,false,3)
        for(let x=1 ; x<=10 ; x++){
            valor = parseInt(leia("Digite o valor : "))
            opcao = leia("Digie C para crédito e D para debito")
            if( opcao == "C"){
                cp1.Credito(valor)
            }
            else if(opcao == "D"){
                cp1.Debito(valor)
            }
            console.log("Saldo atual da conta : "+cp1.saldo)
        }
    }
    
    else if (op == "3"){
        console.log("Bank")
        console.log("O Banco do 2MIA\n")
        console.log(" Conta Especial")
        let numero = leia ("Digite o numero da conta : ")
        let cpf = leia("Digite o cpf da conta : ")
        let cp1 = new corrente(numero,cpf,0,false,3)
        for(let x=1 ; x<=10 ; x++){
            valor = parseInt(leia("Digite o valor : "))
            opcao = leia("Digie C para crédito e D para debito")
            if( opcao == "C"){
                cp1.Credito(valor)
            }
            else if(opcao == "D"){
                if(saldo<0){
                    this.Limite=this.Limite - valor
                }
            }
            console.log("Saldo atual da conta : "+cp1.saldo)
        }
    }
    
    else if (op == "4"){
        console.log("Fim de programa ... até mais")
    }
}while(op != "4")
console.log("Fim de programa ... até mais")





let numero = parseInt(leia("Digite o numero da conta"))
let cpf = leia("Digite o cpf: ")
let c1 = new Conta(numero,cpf,0,false)
c1.ativar()
c1.Credito(100)
console.log("Saldo da conta R$ : "+ c1.saldo)

