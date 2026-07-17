function tabuada() { 
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
       let n = Number(num.value)
       let c = 1
       tab.innerHTML = '' // limpar a tabuada antes de gerar uma nova
       while (c <= 10) {
         let item = document.createElement('option')
         item.text = '${n} x ${c} = ${n * c}'
         item.value = 'tab${c}' // atribuindo um valor para cada item da tabuada
         tab.appendChild(item)
         c++
       }

    }
}