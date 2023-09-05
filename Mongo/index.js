//mongodb://localhost:27017

const mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
 {useNewUrlParser : true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error : '))

db.once('open', function(){
    console.log("Estamos conectados ao banco");
})

const pessoaSchema = new mongoose.Schema({
  nome : String,
  idade : Number,
  profissão : String
});

const pessoa = mongoose.model('Pessoa',pessoaSchema)

const marcos = new pessoa({
  nome :'Marcos',
  idade: 25,
  profissão : 'Estudante'
});

console.log(marcos.nome);
console.log(marcos.idade);
console.log(marcos.profissão);

marcos.save()

const pedro = new pessoa({
  nome :'Pedro',
  idade: 16,
  profissão : 'Estudante'
});

console.log(pedro.nome);
console.log(pedro.idade);
console.log(pedro.profissão);

pedro.save()