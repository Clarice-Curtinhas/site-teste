let variavelAlice = 0

function BotaoAlice(imagem, nomeMusica, nomeCantor, v){

    if (v == 1 && variavelAlice == 4){
        variavelAlice = -1
    }

    else if(v == -1 && variavelAlice == 0){
        variavelAlice = 5
    }

    variavelAlice += v

    const nomeCapa = ["assets/imagens/Duvet-boa.png", "assets/imagens/DontSpeak-NoDoubt.png", "assets/imagens/FadeIntoYou-Mazzy.jpg", "assets/imagens/waiting room.png", "assets/imagens/Linger-Cranberries.png"]
    const textoMusica = ["Duvet", "Don't Speak", "Fade Into You", "Waiting Room", "Linger"]
    const textoCantores = ["bôa", "No Doubt", "Mazzy Star", "Phoebe Bridgers", "The Cranberries"]

    var capa = document.getElementById(imagem)
    var musica = document.getElementById(nomeMusica)
    var cantor = document.getElementById(nomeCantor)

    capa.src = nomeCapa[variavelAlice]
    musica.textContent = textoMusica[variavelAlice]
    cantor.textContent = textoCantores[variavelAlice]
}

let variavelCat = 0

function BotaoCat(imagem, nomeMusica, nomeCantor, v){

    if (v == 1 && variavelCat == 4){
        variavelCat = -1
    }

    else if(v == -1 && variavelCat == 0){
        variavelCat = 5
    }

    variavelCat += v

    const nomeCapa = ["assets/imagens/Sabrina-short'nsweet.png", "assets/imagens/TillForeverFallsApart.png", "assets/imagens/Taylor.png", "assets/imagens/Hozier.png", "assets/imagens/GoodLuckBabe.png"]
    const textoMusica = ["Taste", "Till Forever Falls Apart", "Fortnight (feat. Post Malone)", "Work Song", "Good Luck, Babe!"]
    const textoCantores = ["Sabrina Carpenter", "Ashe, FINNEAS", "Taylor Swift, Post Malone", "Hozier", "Chappell Roan"]

    var capa = document.getElementById(imagem)
    var musica = document.getElementById(nomeMusica)
    var cantor = document.getElementById(nomeCantor)

    capa.src = nomeCapa[variavelCat]
    musica.textContent = textoMusica[variavelCat]
    cantor.textContent = textoCantores[variavelCat]
}

variavelClarice = 0

function BotaoCla(imagem, nomeMusica, nomeCantor, v){

    if (v == 1 && variavelClarice == 4){
        variavelClarice = -1
    }

    else if(v == -1 && variavelClarice == 0){
        variavelClarice = 5
    }

    variavelClarice += v

    const nomeCapa = ["assets/imagens/Sabrina-emails.png", "assets/imagens/MiloJ.png", "assets/imagens/CartaAoTom74.png", "assets/imagens/Moment.png", "assets/imagens/FilhoDaNoite.png"]
    const textoMusica = ["Fast Times", "3 PECADOS DESPUES...", "Carta Ao Tom 74", "Moment", "Filho da Noite"]
    const textoCantores = ["Sabrina Carpenter", "Milo J", "Vinícius de Moraes, ...", "Victoria Monét", "Matuê, MC Ryan SP"]

    var capa = document.getElementById(imagem)
    var musica = document.getElementById(nomeMusica)
    var cantor = document.getElementById(nomeCantor)

    capa.src = nomeCapa[variavelClarice]
    musica.textContent = textoMusica[variavelClarice]
    cantor.textContent = textoCantores[variavelClarice]
}

variavelJulia = 0

function BotaoJulia(imagem, nomeMusica, nomeCantor, v){

    if (v == 1 && variavelJulia == 4){
        variavelJulia = -1
    }

    else if(v == -1 && variavelJulia == 0){
        variavelJulia = 5
    }

    variavelJulia += v

    const nomeCapa = ["assets/imagens/Casual-Chappell.png", "assets/imagens/DIVE.png", "assets/imagens/Taylor.png", "assets/imagens/Selfless-TheStrokes.png", "assets/imagens/Casual-Chappell.png"]
    const textoMusica = ["Casual", "DIVE", "Guilty as Sin?", "Selfless", "Red Wine Supernova"]
    const textoCantores = ["Chappell Roan", "TWICE", "Taylor Swift", "The Strokes", "Chappell Roan"]

    var capa = document.getElementById(imagem)
    var musica = document.getElementById(nomeMusica)
    var cantor = document.getElementById(nomeCantor)

    capa.src = nomeCapa[variavelJulia]
    musica.textContent = textoMusica[variavelJulia]
    cantor.textContent = textoCantores[variavelJulia]
}

variavelNat = 0

function BotaoNat(imagem, nomeMusica, nomeCantor, v){

    if(v == 1 && variavelNat == 4){
        variavelNat = -1
    }

    else if(v == -1 && variavelNat == 0){
        variavelNat = 5
    }

    variavelNat += v

    const nomeCapa = ["assets/imagens/MyChemicalRomance.png", "assets/imagens/AvrilLavigne.png", "assets/imagens/GreenDay.png", "assets/imagens/SimplePlan.png", "assets/imagens/MyChemicalRomance.png"]
    const textoMusica = ["I Don't Love You", "Love It When You Hate Me", "Wake Me up When September Ends", "Welcome to My Life", "Cancer"]
    const textoCantores = ["My Chemical Romance", "Avril Lavigne, blackbear", "Green Day", "Simple Plan", "My Chemical Romance"]

    var capa = document.getElementById(imagem)
    var musica = document.getElementById(nomeMusica)
    var cantor = document.getElementById(nomeCantor)

    capa.src = nomeCapa[variavelNat]
    musica.textContent = textoMusica[variavelNat]
    cantor.textContent = textoCantores[variavelNat]
}

olivia = 0

function vasco(nova){
    var imagem = document.getElementById(nova)

    if(olivia == 0){
        imagem.src = "assets/imagens/olivia-vasco.jpg"
        olivia += 1
    }

    else if(olivia == 1){
        imagem.src = "assets/imagens/shrek-mandrake.jpg"
        olivia -= 1
    }
}