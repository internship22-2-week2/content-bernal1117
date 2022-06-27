/*scope 
scope global, scope funcional y scope bloque*/
//var para usarlo de variable global
//const y let dentro de funciones

//Funciones
//Declaracion clasica
function SoyUnaFuncion(){
console.log('Soy una funcion') 
}
//Declaracion de una funcion anonima
var SoyUnaFuncion = function(){          //var y let son contenedores           
console.log('Soy una funcion')
}
//Declaracion de funcion flecha
var SoyUnaFuncion = () => {
    console.log('Soy una funcion')
}


function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
function persona(nombre,callback){
    callback(nombre)
}
persona('Daniel',saludar)