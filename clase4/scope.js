// SCOPE CON VAR EN FUNCIONES

var nombre = "Lucas" // Global

function saludo(){
    var nombre = "Germán" // Local
    console.log(nombre)
}

saludo()
console.log(nombre)

console.log(nombre) //1 - Global

saludo(); //2 - Local

console.log(nombre) //3 - Global

// SCOPE CON LET EN FUNCIONES

let apellido = "Della Sala" // Global

function saludo2(){
    let apellido = "Bonacchi" // Local
    console.log(apellido)
}
saludo2()
console.log(apellido)


//SCOPE EN IF, SWITCH, FOR, WHILE
var a = 5; //GLOBAL
var b = 10; //GLOBAL

if(a===5){
    let a = 4; //LOCAL NO PERMITE ACCESO FUERA DEL IF
    var b = 1; //LOCAL

    console.log("LOCAL a",a);
    console.log("LOCAL b",b);
}

console.log("GLOBAL a",a);
console.log("GLOBAL b",b);

