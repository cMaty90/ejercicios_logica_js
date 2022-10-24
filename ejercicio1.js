const letrasRepetidas = (letra, palabra) => {

 let contadorRepetidos = 0;

 for (let i = 0; i < palabra.length; i++) {
  let subcadena = palabra.substring(i, i + 1);
  if (subcadena == letra) {
   contadorRepetidos += 1;
  }
 }
 console.log(contadorRepetidos);
}

letrasRepetidas("m", "mamut");
letrasRepetidas("m", "Mamut");
letrasRepetidas("m", "MaMut");
letrasRepetidas("M", "MaMut");


