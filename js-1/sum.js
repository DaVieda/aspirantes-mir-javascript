// escribe la función suma acá
function sum(numero){
  let total = 0;
  if (numero <= 0) {
    return "Número debe ser mayor a cero!";
  } else{
  for (let i=1; i <= numero; i++) {
    total = total + i;
  }
}
  return total;
}
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120
console.log(sum(-2)) // debe ser mayor a 0
console.log(sum(0)) // debe ser mayor a 0