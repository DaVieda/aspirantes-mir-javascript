// escribe la función sum acá
function sum(numeros) {
  let resultado=0;
  for (let i=0; i < numeros.length; i++){
    resultado += numeros[i];
  }
  return resultado;
}
// código de prueba
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0