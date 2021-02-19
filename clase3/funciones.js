//Declaro la función suma
function suma(){
    return 5+3;
}

//Ejecuto o invoco a la función suma
console.log("Suma nivel 1: ", suma());

//Parámetros
function suma2(a,b){
    console.log("a es del tipo: ",typeof a,"b es del tipo: ",typeof b)
    return a+b;
}

console.log("Suma nivel 2: ", suma2(5,3))
console.log("Suma nivel 2 segundo caso: ", suma2("Hola ", "mundo"))
console.log("Suma nivel 2 tercer caso: ", suma2(2, "2"))

//Función como parámetro
function operador(operacion, a, b){
    console.log("El operador ejecuta la operación que viene por param")
    return operacion(a,b)
}

//Funcion resta
function resta(a,b){
    console.log("a es del tipo: ",typeof a,"b es del tipo: ",typeof b)
    return a-b;
}

//console.log("Suma nivel 3: ", operador(suma2, 5, 9))
console.log("Resta nivel 3: ", operador(resta, 5, 9))
