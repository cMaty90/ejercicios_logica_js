const reemplazarVocales = (palabra) => {
 for (let i = 0; i < palabra.length; i++) {
   if (palabra[i] == "A" || palabra[i] == "a") {
    palabra = palabra.replace('A', '1')
    palabra = palabra.replace('a', '1')
   }

   if (palabra[i] == "E" || palabra[i] == "e") {
    palabra = palabra.replace('E', '2')
    palabra = palabra.replace('e', '2')
   } 

   if (palabra[i] == "I" || palabra[i] == "i") {
    palabra = palabra.replace('I', '3')
    palabra = palabra.replace('i', '3')
   } 

   if (palabra[i] == "O" || palabra[i] == "o") {
    palabra = palabra.replace('O', '4')
    palabra = palabra.replace('o', '4')
   } 

   if (palabra[i] == "U" || palabra[i] == "u") {
    palabra = palabra.replace('U', '5')
    palabra = palabra.replace('u', '5')
   } 
 }
 console.log(palabra)
}


reemplazarVocales("murcielago");
reemplazarVocales("karachi");
reemplazarVocales("chembur");
reemplazarVocales("khandbari");

