//Suma
let x = 5 + 2
//Resta
let y = 5 - 2
//Multi
let z = 5 * 2
//Division
let a = 5 / 2
//Resto => modulo
let b = 5 % 2
//Potencia
let c = 5**2

let d = x + y

let e = "5" + 5
let f = 55

//Comparaciones
let g = e==f // no estricto
let h = e===f // estricto
let i = (e!=f) // distinto

let todasLasMateriasAp = true;
let promedioIgualOMayorA7 = false;

let teRegaloElCelu = todasLasMateriasAp && promedioIgualOMayorA7 // AND
let algunaDeLasDos = todasLasMateriasAp || promedioIgualOMayorA7 // OR

let aDiciembre = !todasLasMateriasAp //contrario (negacion)


//If
let teQuedaronMasDe2 = false

if (teQuedaronMasDe2) {
    console.log("Repetis")
} else {
    console.log("No repetis")
}

//Elseif
let cantMaterias = 0

if (cantMaterias===0) {
    console.log("Pasas limpio")
} else if (cantMaterias>2) {
    console.log("Repetis")
} else {
    console.log("Previa")
}


//ShorthandOperator
console.log("Short", cantMaterias === 0 ? true : false);

//Switch
let frutaOverdura = ["Banana", "Palta", "Melon", "Manzana"];

switch (frutaOverdura[0]) {
    case "Banana": console.log("Se vende por kg");
    break;
    case "Palta": console.log("Se vende x u");
    break;
    case "Melon": console.log("Se vende x u");
    break;
    case "Manzana": console.log("Se vende x kg");
    break;
    default:  console.log("se vende x kg")
}

//For 

for(let i = 0; i<frutaOverdura.length; i++){
    console.log(frutaOverdura[i])
}

//While (Mientras)

let condicionDeInterrupcion = 0

while(condicionDeInterrupcion<3){
    console.log("Condición de interrupción: ", condicionDeInterrupcion)
    
    condicionDeInterrupcion++
    //Bloque de código
}