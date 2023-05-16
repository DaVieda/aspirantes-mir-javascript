// escribe la función suma acá
function bmi(peso, altura){
  let IndiceMasa = peso/(altura**2);
  return IndiceMasa;
}
// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695
// código de prueba alterno
console.log("Peso:80\nTalla:1.75")
console.log("Tu Indice de Masa Corporal es: " + bmi(80, 1.75))