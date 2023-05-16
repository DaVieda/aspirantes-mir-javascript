// escribe la función max acá
function max(numeros){
  if(numeros.length===0) undefined;
  let resultado = numeros[0];
  for(let i=1; i<numeros.length; i++){
    if(numeros[i] > resultado) resultado = numeros[i];
  }
  return resultado;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined