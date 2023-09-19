const parImpar = (numero) => {
    if (numero < 0){
        return 'Negativo'
    }
    if (numero == 0){
        return 'Neutro'
    }
    else  if ((numero % 2) == 0){
        return 'Par'
    }
    else if (numero > 0){
        return 'Positivo'
    }

    else{
        return 'Impar'
    }
 }

 console.log("O numero é "+parImpar(0));
 console.log("O numero é "+parImpar(-1));
 console.log("O numero é "+parImpar(1));
 console.log("O numero é "+parImpar(2));