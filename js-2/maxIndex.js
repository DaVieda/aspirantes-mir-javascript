// escribe la función max acá
function maxIndex(numeros){
  if(numeros.length === 0){
    return -1
  };
  let mayor = 0;
  let indice = 0;
  for (let i = 0; i <= numeros.length; i++) {
    if(numeros[i] > mayor) {
      mayor = numeros[i];
      indice = i;
    }
  }
  return indice;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1