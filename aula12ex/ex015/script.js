function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    return
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade >= 10 && idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

    }   
}



