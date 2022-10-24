const ordenamiento = (numero) => {
 let mod;
 let division;
 let digito;
 let vector = []; 
  while (mod != numero && division != 0) {
    mod = numero % 10;
    division = parseInt(numero / 10);
    digito = mod;
    numero = division;
    vector.push(digito);
  }
 ordenarVectorDescendente(vector);
 console.log(vector.join(''))
}

const ordenarVectorDescendente = (vector) => {
 vector.sort((a, b) => {
  if (a > b) {
   return -1
  }
  if (a < b) {
   return 1
  }
  if (a == b) {
   return 0
  }
 })
}

ordenamiento(38373);
ordenamiento(123456);

