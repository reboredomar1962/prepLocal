
function CalculadoraNPI (){
    this.resultado = 0
    this.numeros = []
  }
  
  CalculadoraNPI.prototype.valor = function (){
      return this.resultado
  }
  CalculadoraNPI.prototype.agregar = function(num){
     this.numeros.push(num)
     return this.numeros
  }
  CalculadoraNPI.prototype.sumar = function(){
      if (this.numeros.length >= 2){
          let a = this.numeros.pop()
          let b = this.numeros.pop()
          this.resultado = b + a
          this.numeros.push(this.resultado)
      } else { 
          throw "La calculadoraNPI necesita por lo menos 2 números"
  }}
  CalculadoraNPI.prototype.restar = function(){
    if (this.numeros.length >= 2){
        let a = this.numeros.pop()
        let b = this.numeros.pop()
        this.resultado = b - a
        this.numeros.push(this.resultado)
    } else { 
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }}

  CalculadoraNPI.prototype.multiplicar = function(){
    if (this.numeros.length >= 2){
        let a = this.numeros.pop()
        let b = this.numeros.pop()
        this.resultado = a * b
        this.numeros.push(this.resultado)
    } else { 
       throw ("La calculadoraNPI necesita por lo menos 2 números")
    }}

  CalculadoraNPI.prototype.dividir = function(){
    if (this.numeros.length >= 2){
        let a = this.numeros.pop()
        let b = this.numeros.pop()
        this.resultado = b / a
        this.numeros.push(this.resultado)
    } else { 
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
  }
  
let calculadora = new CalculadoraNPI()
  
  
 