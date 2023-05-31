class bola{
    constructor(id,descrição,estoque,preço,marca,modelo,ativar,retirarEstoque,incluirEstoque){
    this.id = id;
    this.descrição = descrição;
    this.estoque = estoque;
    this.preço = preço;
    this.marca = marca;
    this.modelo = modelo;
    this.ativar = ativar;
    this.retirarEstoque = retirarEstoque;
    this.incluirEstoque = incluirEstoque
}
}

ativar();{
    this.ativo = true
}

Retirar(estoque);{
 console.log("quantidade atual :"+estoque);
 if(estoque>0){
    let retirar= estoque-retirarEstoque
 }
};

Incluir(estoque);{
    console.log("quantidade atual :"+estoque);
    let incluir = estoque+incluirEstoque
}

let op = "";
let res = "";

console.log("Esportes World")
    console.log("Esporte é para todos")
    console.log("Gostaria de fazer compras ?")
    console.log("Sim/Não")
    if(op == "Sim"){
        let cp = new bola(1,Pano,15,Penalti,Futebol,20)
        console.log("Você vai retirar do estoque");
        if(res == "Sim"){
        retirarEstoque = parseInt(leia("Digite quantas vai retirar :"))
        cp.Retirar(estoque)
    }
        if(estoque<10){
            incluirEstoque = parseInt(leia("Digite quantas vai incluir :"))
        }
        console.log("Quantidade atual no estoque é :"+estoque);
    }
    else if(op == "Não"){
        console.log("Obrigado volte novamente");
    }