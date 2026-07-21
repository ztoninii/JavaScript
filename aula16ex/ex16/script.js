let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = '' // limpa o campo
    num.focus()  // deixa o cursor no campo
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) 
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]
            
        }   
        media = soma / tot
       
        /*
            Esse trecho do código tem como objetivo percorrer todos os elementos do vetor valores para descobrir qual é o maior e qual é o menor número armazenado nele.

            O comando for (let pos in valores) percorre todas as posições do vetor. A variável pos representa o índice de cada elemento, ou seja, a posição em que o número está armazenado. Para acessar o valor correspondente a essa posição, utiliza-se valores[pos].

            Durante cada repetição do laço, o programa compara o valor atual com a variável maior. Se o número encontrado for maior do que o valor armazenado em maior, essa variável é atualizada para receber o novo valor. Dessa forma, ao final do laço, maior conterá o maior número existente no vetor.

            Em seguida, é feita outra comparação com a variável menor. Se o valor atual do vetor for menor do que o valor armazenado em menor, a variável menor é atualizada. Assim, ao término do laço, ela armazenará o menor número presente no vetor.
            
        */
            
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}
