const produtos = [
    {nome: 'Notebook', preco: 12599, fragil: true}, 
    {nome: 'iPad Pro', preco: 7899, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 15.99, fragil: false},
]
console.log(produtos.filter(function(p) {
     return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))