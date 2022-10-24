const menorMayor = (vector) => {
 const vectorResultado = [];
 let menor = vector[0];
 let mayor = vector[0];

 for (let i = 0; i < vector.length; i++) {
  if (vector[i]<menor) {
   menor = vector[i];
   }

  if (vector[i] > mayor) {
   mayor = vector[i]; 
   }
 }
 vectorResultado.push(menor, mayor);
 console.log(menor);
 console.log(mayor);
 console.log(vectorResultado);
}

let vector = [3,44,1,66,89];
menorMayor(vector);