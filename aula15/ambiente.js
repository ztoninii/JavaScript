let num = [4, 6, 1, 2, 5, 3]
num.push(7) // Adiciona um valor no final do vetor
num.sort() // Ordena os elementos do vetor em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(10) // Retorna a posição do valor informado
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
}else{
    console.log(`O valor está na posição ${pos}.`)
}