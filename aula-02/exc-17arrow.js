let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola!' // possui um parametro
console.log(ola())

function pessoa() {
    this.idade = 0

    setInterval(() => {
       this.idade++
       console.log(this.idade) 
    }, 1000)
}
new pessoa