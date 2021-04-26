let obj;
function setPropsOnObj(obj) {
    obj.p = 5 
    obj.plataforma = 5
    obj.proximo = function (numero){
        return numero + 1
    }
    obj.la = {clave : { secreta : { es : 404 }}}
   
}
         
       

let array;
function setPropsOnArr(array) {
  array.hola = function (){
    return "Hola!"
   }
  array.river = "plate"
  array[0] = 5
  array.doble = function (numero){
    return numero *2
   }
}



let functionObject;
functionObject = function() {
return 'Soy una función con propiedades!';
}
function setPropsOnFunc (param) {   
    param.year = "2017"
    param.mitad = function (valor){
        return valor / 2
    }
    param.prototype.helloWorld = function (){
        return "Hello World"
    }
      
}
  


















  