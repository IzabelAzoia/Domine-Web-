 console.log(Math.ceil(6.1))

 const obj1 = {}
 obj1.nome = 'Bola'
 console.log(obj1)
 console.log(obj1.nome)
 function Obj(nome) {
     this.nome = nome
     this.exec = function() {
         console.log('Exec...')
     }
 }
 const obj2 = new Obj('Caddeira')
 const obj3 = new Obj('Mesa')
 console.log(obj2.nome)
 console.log(obj3.nome)
 obj3.exec()

class Fruta {
    constructor(nomeFruta, corFruta) {
        this.nomeFruta = nomeFruta

        this.mostrarCorFruta = function () {
            console.log("A cor da fruta é: " + corFruta)
        }

        this.mostrarNomeFruta = function () {
            console.log("O nome da fruta é: " + this.nomeFruta)
        }
    }
}

let fruta = new Fruta("Mamão", "Laranja")
fruta.mostrarCorFruta()
fruta.mostrarNomeFruta()
console.log("Gosto muito da fruta " + fruta.nomeFruta)