//Criação da função normal
function escreveNoConsole(){
    console.log("1º exemplo - Função normal");
}

//Chamar a função para executar
escreveNoConsole();

//Variação de função normal ou declarada

const escreveNoConsoleVariacao = function(){
    console.log("2º exemplo - Variação da função normal");
}

//Chamar a função para executar
escreveNoConsoleVariacao()

//arrow function função seta ou flecha
//toda arrow function usa os caracters = junto com >
const escreverComArrow = ()=>{
    console.log("3º exemplo - Arrow function");
}

//Chamar a função para executar
escreverComArrow()

//arrow function => com parametro
const escreverComArrowParametro = (texto) => {
    console.log(texto);
}

//Chamar a função para executar
escreverComArrowParametro("4º exemplo - Utilizando parametros")
escreverComArrowParametro("4º exemplo - Outro texto")

//função arrow soma dois valores
const somaDois = (numero1, numero2) => {
    console.log('5º exemplo - A soma é '+(numero1+numero2));
}

//executando
console.log('---------------------------------');
somaDois(10,10)

//variação arrow function sem parentes e sem chaves
const varianteArrow = texto => console.log(texto);

//crie uma arrow function chamada parImpar

const parImpar = (numero) =>{
    if(numero>0){
        console.log(numero+" é positivo");
    }
    else if(numero<0){
        console.log(numero+" é negativo");
    }
    if(numero%2 == 0){
        console.log(" e tambem é Par");
    }
    else{
        console.log(" e tambem é Impar");
    }
}

console.log('-------------------------------------');
parImpar(7)
parImpar(8)