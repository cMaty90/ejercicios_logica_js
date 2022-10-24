const codigoPostal = (codigo) => {
 let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
 let simbolos = "|@#$&/()=?¡*-+¿[]{}_.;,";
 let matchLetras = codigo.toString().match(letras);
 let matchSimbolos = codigo.toString().match(simbolos);
 let longitud = codigo.toString().length;
  if ((matchLetras || matchSimbolos) && longitud != 4) {
    console.log("false");
  }
  else {
    console.log("true");
  }
} 

codigoPostal(1714);
codigoPostal(12424);
codigoPostal("732 2");
codigoPostal("A 323");


