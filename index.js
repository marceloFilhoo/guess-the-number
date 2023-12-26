let tentativas=0;
let palpites = []
let numero

function randonNumber(){
   numero = Math.floor(Math.random() * 100 + 1)

}

function jogo(){
    const numeroUser = Number(document.getElementById("inputBox").value)
    palpites.push(' ' + numeroUser)
    document.getElementById("guesses").innerHTML = palpites
    
    if(numeroUser > numero){
        document.getElementById("textOutput").innerHTML = 'Seu numero esta acima' 
        document.getElementById("inputBox").value=""
    }else if(numeroUser < numero){
        document.getElementById("textOutput").innerHTML = 'Seu numero esta abaixo' 
        document.getElementById("inputBox").value=""
    }else{
        document.getElementById("textOutput").innerHTML = 'Acertou' 
        document.getElementById('inputBox').readOnly = true; 
    }

    tentativas++
    document.getElementById("attempts").innerHTML = tentativas

    if(tentativas == 10){
        document.getElementById("textOutput").innerHTML = 'Acabaram as tentativas, o numero era '+numero
        document.getElementById('inputBox').readOnly = true; 
    }
}
function newGame(){
    window.location.reload()
}
