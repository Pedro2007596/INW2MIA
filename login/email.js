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