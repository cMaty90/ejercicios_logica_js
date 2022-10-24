const sumarLosMenores = (vector) => {
 let suma;
 let positivos = [];
 
 for (let i = 0; i < vector.length; i++) {
  if (Math.sign(vector[i]) !== -1) {
   positivos.push(vector[i])
  }
 }

 positivos.sort((a, b) => {
  if (a < b) {
   return -1
  }
  if (a > b) {
   return 1
  }
  if (a == b) {
   return 0
  }
 })
 suma = positivos[0] + positivos[1]; 
 return suma;
} 


console.log(sumarLosMenores([19, 5, 42, 2, 77]));
console.log(sumarLosMenores([10, 343445353, 3453445,3453545353453]));
console.log(sumarLosMenores([2,9,6,-1,-2]));
console.log(sumarLosMenores([879, 953, 694, -847, 342, 221, -91, -723, 791, -587 ]));
