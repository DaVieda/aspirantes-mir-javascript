/* En un archivo llamado object1.js Crea una variable llamada
pedro de tipo objeto literal con las siguientes llaves y valores: */

let pedro = { //Comienza creación variable pedro con sus propiedades
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"]
} //Termina creación de la variable con 4 propiedades.

console.log("La edad de " + pedro.nombre +" es: " + pedro.edad + " años"); //Imprime en consola la edad

pedro.estatura = 1.8; //Se añade propiedad estatura; hasta aquí 5 propiedades
delete pedro.activo; //Se elimina propiedad activo; desde aquí ya son sólo 4 propiedades

let llaves = Object.keys(pedro); //Se define un nuevo arreglo con las llaves del objeto literal "pedro"

for (let i=0; i < llaves.length; i++) {  //Comienza iteración para recorrer las llaves y sus valores
  let propiedad = llaves[i];  //Se define variable propiedad con c/u de las llaves según (i)
  console.log(propiedad + ": " + pedro[llaves[i]]);  //Se imprime en consola la llave y su respectivo valor
}  //Termina iteración

pedro.saluda = function(){  //Se añade propiedad tipo funcion
  console.log("Hola, me llamo " + pedro.nombre);  //Se imprime en consola el saludo
}  //Termina definición de la propiedad tipo función

pedro.saluda()  //Se invoca a la propiedad tipo función