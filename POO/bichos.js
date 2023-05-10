class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo= tipo;
        this.porte= porte;
        this.femea= femea;
        this.nascimento= nascimento
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }

    retorarIdade(){
        return anoAtual- this.nascimento
    }
}



class Gato extends Animal {
    constructor(raca, cor){
        super(tipo);
        this.raca= raca;
        this.cor= cor
    }
    Miar(){
        console.log(" Miauuuuuu.......")
    }
}
class Cachorro extends Animal {
    constructor(raca, cor){
        super(tipo);
        this.raca= raca;
        this.cor= cor
    }
    Latir(){
        console.log(" Au Au.......")
    }
}
let bicho1 = new Animal("mamifero","medio",false,2020)
let Frajola = new Gato("Felino","sphynx","preto")
let Snoop = new Cachorro("Canino","beagle","malhado")
console.log(bicho1.porte)
bicho1.fazerBarulho()
Frajola.fazerBarulho()
Frajola.Miar()
Snoop.Latir()
Snoop.nascimento= 2021
console.log("A idade é "+Snoop.retorarIdade(2023))