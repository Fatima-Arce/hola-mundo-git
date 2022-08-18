let nombre = "Juan Perez";
let edad = calcularEdad(2002);
console.log("Hola " + nombre);
console.log(nombre + " tiene "+ edad + " años");

function calcularEdad(anioNacimiento){
    return new Date().getFullYear() - anioNacimiento; 
}