function crearCalculadora(){
    let resultado = 0
    let calculadora = {
      valor: function(){
        return resultado
      },
      sumar: function(x){
        return resultado += x
      },
      restar: function(x){
        return resultado -= x
      },
      reset: function(){
        return resultado = 0
      }
    }
    return calculadora;
}
  
  
  