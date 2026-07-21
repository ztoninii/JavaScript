let vetores = [5, 10, 15, 20]

 /*
for (let pos = 0; pos < vetores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}
*/

for (let pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}