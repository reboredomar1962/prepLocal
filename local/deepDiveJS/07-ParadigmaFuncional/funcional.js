function duplicar (x){
    return x *2
}

function triplicar (x){
    return x *3
}

function map(arr, fn){
    let newArr = []
    for (let i = 0 ; i < arr.length ; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr
}

function filter(arr, fn){
    let newArr = []
    for (let i = 0; i < arr.length ; i++){
        if (fn(arr[i]) == true){
            newArr.push(arr[i])

        }
    }
    return newArr
}


function contains (obj , valor){
    for (let propiedad in obj){
      if(obj[propiedad] == valor){
          return true
      } 
    }
  return false
}
 

function cuentaPalabras(string){
   return string.split(" ").length

}


function reduce (arr, num, fn){
    var resultado = num
    for(var i = 0; i < arr.length; i++){
       resultado = fn(resultado, arr[i])
    }
    return resultado
}


function cuentaPalabrasReduce(string, i){
    return (string += cuentaPalabras(i))
}

function suma (arr){
    function sumar (){
        let resultado = 0
        for (let i = 0; i < arr.length ; i++){
         resultado += arr[i]
        }
        return resultado
    }
    return reduce(arr, 0, sumar)
}


function every (arr, fn){
    let array = []
    let suma = function(a,b){
        return a + b
    }
for(var i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true){
            array.push(1)
        }
    }

    if (reduce(array, 0, suma) === arr.length){
        return true
    } else {
        return false
    }
}

function any (arr, fn){
    let array = []
    let suma = function(a,b){
        return a + b
    }
for(var i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true){
            array.push(1)
        }
    }

    if (reduce(array, 0, suma) === 0){
        return false
    } else {
        return true
    }
}
  




















