const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aula0210',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 10000
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open',()=>{
    console.log('Conectado ao banco de dados');
});

//2 - Fazer a conexão
//2.1 SCHEMA

const alunoSchema= new mongoose.Schema({
    nome : String,
    idade : Number,
    turma : String
});

//2.1  MODEL

const Alunos = mongoose.model('ALunos', alunoSchema)

//3 Inserindo varios dados
Alunos.insertMany([
    {nome : 'Maria',idade: 15, turma: 'Turma1'},
    {nome : 'Paulo',idade: 16, turma: 'Turma2'},
    {nome : 'Pedro',idade: 17, turma: 'Turma1'}
]);

//4 - recuperando os dados
async function findAlunos(){
    try{
        const alunos = await Alunos.find({})
        console.log("Alunos :", alunos);
    }
    catch(error){
        console.log('Erro na busca :', error)
    }
}
findAlunos();