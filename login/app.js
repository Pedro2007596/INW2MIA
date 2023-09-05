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

firebase.initializeApp(firebaseConfig);
















































/*const firebaseConfig = {
    apiKey: "AIzaSyBN9abGyvsbWfQ7P6hbvXp1-BECwvmI8Ho",
    authDomain: "projeto2miateste-1af7e.firebaseapp.com",
    projectId: "projeto2miateste-1af7e",
    storageBucket: "projeto2miateste-1af7e.appspot.com",
    messagingSenderId: "656253824245",
    appId: "1:656253824245:web:2517fdd1e3fb63bff769bc"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email')
  const passwordField = document.getElementById('password')
  const loginButton = document.getElementById('loginButton')

  loginButton.addEventListener('click',()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log("Usuário logado : ", user)
    })
    .catch((error)=>{
        const errorMessage = error.message
        console.error("Error de autenticação", errorMessage)
    })
  })*/