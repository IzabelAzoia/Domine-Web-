console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

const pilotos = ["Vettel", "Alonso", "Raikkonen", "massa"]
console.log(pilotos)
pilotos.pop()
console.log(pilotos)

pilotos.push("Vestappen")
console.log(pilotos)
pilotos.shift()
console.log(pilotos)

pilotos.unshift("Hamilton")
console.log(pilotos)
//splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

const quaseArray = {0: "Rafael", 1: "Ana", 2: "Bia"}
console.log(quaseArray)
Object.defineProperty(quaseArray, "toString", {
    value: function() {
        return Object.values(this)},
        enumerable: false
})
console.log(quaseArray[0])

const meuArray = ["Rafael", "Ana", "Bia"]
console.log(quaseArray.toString(), meuArray)