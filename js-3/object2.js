/* En un archivo llamado object2.js Crea un objeto literal llamado "persona" con 
las siguientes propiedades: nombre, edad, ciudad y profesión. */

// Creación del objeto literal:
persona = {
  nombre: "Daniel",
  edad: 35,
  ciudad: "Medellin",
  profesion: "Bioingeniero"
}
console.log("Objeto Persona:");
console.log(persona);

// función presentación:
function presentacion(objeto) {
  let cadena_text = "";
  let objPerso = Object.keys(objeto);
  for (let i=0; i<objPerso.length; i++) {
    let propiedad = objPerso[i];
    if (propiedad != "profesion") {
      cadena_text += objeto[propiedad] + " ";
    }/* else{
      // continua...
    } */
  }
  return cadena_text;
}
// console.log(presentacion(persona));
mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["ver_series", "jugar_futbol", "escuchar_musica"];
console.log("Hobbies: " + persona.hobbies);

let hobbies = persona.hobbies;
for (let i=0; i<hobbies.length; i++) {
  console.log(hobbies[i]);
}