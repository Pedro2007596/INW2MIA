function falarDepoisDe(segundo, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundo * 1000)
    })
}

falarDepoisDe(3, "Ola mundo")
.then(frase=> frase.concat(" texto da promise!!!"))
.then(novaFrase => console.log(novaFrase))