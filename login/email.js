function createLogin(){
    var email = document.getElementById('email').Value;
    var password = document.getElementById('password').Value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( user =>{
        console.log('Usuário', user);
        alert('Usuario criado e logado')
    })
    .catch(err =>{
     console.error("Erro ao criar usuario", err)
    })
}

function loginEmail(){
    var email = document.getElementById('email').Value;
    var password = document.getElementById('password').Value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
        alert('Usuário logado');
    })
    .catch(err =>{
        console.log('error', error)
    })
  }