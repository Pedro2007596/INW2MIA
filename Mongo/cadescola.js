//configure a conexão com o mongodb

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS : 20000
});

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log("Estamos conectados ao mangoDB");
});

const alunoSchema = new mongoose.Schema({
    matricula : String,
    Nome : String,
    Idade : Number,
    Turma : String
});

const Alunos = mongoose.model("Aluno", alunoSchema);

const paulo = new Alunos({
    matricula : 'rm15665',
    Nome : "Paulo Augusto da Silva",
    Idade : 18,
    Turma : '2MIA'
});
paulo.save();

const maria = new Alunos({
    matricula : 'rm15663',
    Nome : "Maria Carla",
    Idade : 18,
    Turma : '2MIA'
});

maria.save();

