
  function concatenar (){
      let string = ""
      for (let i  = 0 ; i < arguments.length ; i++){
        string = Array.prototype.slice.call(arguments)
      }
    return string.join("")
}

 

function invocarFunciones (){
    let resultados = ""
    for (let i = 0 ; i < arguments.length ; i++){
        resultados += arguments[i]()
    }
    return resultados
}



function creadorDeIncrementos (numero){
    return function (x){
        return  x + numero
    }
}
    


function invocacionUnica (funcion){
    let unicaVez = false
    return function(){
    if (!unicaVez){
        unicaVez = true
        funcion()
    }
    }

}
 


function objetoConClousure (){
    let resultado = 0
    let obj = {
        incremento : function(){
          resultado +=1
          return resultado
        },
        incrementoPor10 : function(){
         resultado +=10
         return resultado
        }, 
        pedirValor : function(){
            return resultado
        }, 
       cambiarValor : function (x){
            resultado = x
            return resultado 
        }
    }
        return obj
}
    


function ListaDeFuncionesInvitados(){
    let arregloInvitados = []
    arregloInvitados.push(function(num){
        if (num == 404){
         return "Facu"
         } else {
             return "código secreto: invalido"
         }
    },
   function(num){
       if (num == 404){
        return "Santi"
        } else {
            return "código secreto: invalido"
        }
    },
    function(num){
        if (num == 404){
         return "Toni"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Guille"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Solano"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Leo"
         } else {
             return "código secreto: invalido"
         }
    })

    return arregloInvitados
}



function armarListaDeInvitados(){
    let listaOficial = []
    listaOficial.push('Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo')
    return listaOficial
} 