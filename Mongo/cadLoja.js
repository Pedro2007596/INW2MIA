const mongoose = require('mongoose');
const fs = require ('fs');
const csv = require ('csv-parser');
const { strict } = require('assert');
const { error } = require('console');

//conectar o banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/loja',{
        useNewUrlParser : true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS : 20000
})

const produtoSchema = new  mongoose.Schema({
    codigo : String,
    descrição : String,
    valor : Number,
    estoque : Number
})

const Produtos = mongoose.model('Produtos', produtoSchema);

function lerCSVSalvarMongo(){
    const resultado = []

    fs.createReadStream('Base.csv')
    .pipe(csv())
    .on('data', (dados)=>{
        resultado.push(dados);
    })
    .on('end', ()=>{
        Produtos.insertMany(resultado)
        .then(()=>{
            console.log('Dados importados com sucesso');
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.error('Erro ao importar os dados : ', error)
            mongoose.connection.close();
        })
    })
}
lerCSVSalvarMongo();