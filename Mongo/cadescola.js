const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS : 30000
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

const Aluno = mongoose.model("Aluno", alunoSchema);

const paulo = new Aluno({
    matricula : 'rm15665',
    Nome : "Paulo Augusto da Silva",
    Idade : 18,
    Turma : '2MIA'
});

const maria = new Aluno({
    matricula : 'rm15663',
    Nome : "Maria Carla",
    Idade : 18,
    Turma : '2MIA'
});

paulo.save();
maria.save();

Aluno.findOne({Nome : 'Maria Carla'}, function(err, Aluno){
    console.log(Aluno)
})