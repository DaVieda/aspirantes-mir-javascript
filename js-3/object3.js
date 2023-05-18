/* Bonus II:
En un archivo llamado object3.js Crear una variable llamada receta e inicialízalo con
un objeto literal vacío. */

let receta = {};
receta.nombre = "Sandwich";
receta.ingredientes = [];
// console.log(receta);

/*
receta.ingredientes[0] = {nombre: "Pan", cantidad: 2};  //Agregar elementos tipo objeto literal a la propiedad tipo arreglo
receta.ingredientes[1] = {nombre: "Queso", cantidad: 1};
*/
receta.ingredientes.push({nombre: "Pan", cantidad: 2});
receta.ingredientes.push({nombre: "Queso", cantidad: 1});

// console.log(receta);
console.log("Primer ingrediente; " + receta.ingredientes[0]["nombre"]);

// Sumar cantidades:
let longitud = receta.ingredientes.length;
let total = 0;
for (let i=0; i<longitud; i++) {
  total += receta.ingredientes[i]["cantidad"];
}
console.log("Total de ingredientes = " + total);