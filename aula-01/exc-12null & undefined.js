const a = {nome: 'Teste'}
console.log(a)

const b = a
console.log(b)

b.nome = 'Opa'
console.log(b)
console.log(a)

let c = 3
let d = c
d++

console.log(d)
console.log(c)

let valor //não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) //vai dar um erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)