const mayorDigito = (numero) => {
 if (numero<10) {
  return numero
  }
 else {
  let x = mayorDigito(numero / 10);
  if ((numero%10)>x) {
  return (parseInt(numero % 10));
  }
  else {
   return parseInt(x)
   }
 }
 
}

console.log(mayorDigito(12345));
console.log(mayorDigito(1));
console.log(mayorDigito(444));
