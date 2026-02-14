function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`


if (hora >= 0 && hora < 12) {
    // BOM DIA!
    msg.innerHTML += '<br>Bom dia!'
    img.src = 'imagens/fotomanha.png'
    document.body.style.background = '#b16d1fda'
} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    msg.innerHTML += '<br> Boa tarde!'
    img.src = 'imagens/fototarde.png'
    document.body.style.background = '#706a58'
} else {
    // BOA NOITE!
    msg.innerHTML += '<br> Boa noite!'
    img.src = 'imagens/fotonoite.png'
    document.body.style.background = '#323530'
}

}    