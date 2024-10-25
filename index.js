function mudaEstadoGif(id, Texto, segundo_botao){

    const gif = document.getElementById(id)
    var button = document.getElementById(segundo_botao)
    const texto = document.getElementById(Texto)

    if(gif.style.display == "none" && gif.id == "sabrina-dancing"){
        gif.style.display = "flex"
        texto.style.marginTop = "-20%"
        button.disabled = true
    }

    else if(gif.style.display == "none" && gif.id == "ariana-middle-finger"){
        gif.style.display = "flex"
        texto.style.marginTop = "-15%"
        button.disabled = true
    }

    else{
        gif.style.display = "none"
        texto.style.marginTop = "0"
        button.disabled = false
    }
}