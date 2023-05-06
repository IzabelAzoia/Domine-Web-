const carrinho = [
    '{"nome": "Borracha", "preco": 3.89}',
    '{"nome": "Caderno", "preco": 43.89}',
    '{"nome": "BKit de lapis", "preco": 33.89}',
    '{"nome": "Caneta", "preco": 9.89}',

]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i< this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho2 = [
    '{"nome": "Borracha", "preco": 3.89}',
    '{"nome": "Caderno", "preco": 43.89}',
    '{"nome": "BKit de lapis", "preco": 33.89}',
    '{"nome": "Caneta", "preco": 9.89}',

]

const paraObjeto2 = json => JSON.parse(json)
const apenasPreco2 = produto => produto.preco

const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado2)