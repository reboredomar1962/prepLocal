function Mamifero(nombre){
    this.nombre = nombre;
    this.descendencia = [];
}
Mamifero.prototype.saludar = function(){
    return "Hola, mi nombre es " + this.nombre
  }
  Mamifero.prototype.nuevoHijo = function(){
    let hijo = new this.constructor(this.nombre + " Jr")
    this.descendencia.push(hijo)
    return hijo
  }
  
let miMamifero = new Mamifero("Manny");
let otroMamifero = new Mamifero("Toby");

function Gato(nombre, color){
    Mamifero.call(this, nombre)
    this.color = color
}


Gato.prototype = Object.create(Mamifero.prototype)
Gato.prototype.constructor = Gato

Gato.prototype.nuevoHijo = function(color){
let nombre = new Gato(this.nombre + " Jr", color)
    this.descendencia.push(nombre)
    return nombre
}
