// escribe la función join acá
function join(arreglo){
  let cadena = ""; //crear sting vacio
  let longitud = arreglo.length;
  for (let i=0; i < longitud; i++){
    // El for va a ir sumando los elementos
    cadena += " " + arreglo[i]; //sumar y reasignar
    //cadena2 = arreglo[]
  }
  //cadena = cadena.toString("-");
  return cadena;
}
console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""