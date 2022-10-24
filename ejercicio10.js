const calculadora = (numero1, operador, numero2) => {
 let validar_numero = validarNumeros(numero1, numero2);
 let validar_operador = validarOperador(operador);
 if ((validar_numero && validar_operador) != false) {
  console.log("operador o valores incorrectos, revisar datos ingresados");
 }
 else if (numero1 == null || numero2 == null ||  operador == null) {
  console.log("faltan argumentos");
 }
 else {
  switch (operador) {
   case "+":
    let suma = numero1 + numero2;
    console.log(suma);
    break;
   case "-":
    let resta = numero1 - numero2;
    console.log(resta);
    break;
   case "*":
    let producto = numero1 * numero2;
    console.log(producto);
    break;
   case "/":
    if (numero2 == 0) console.log("debe ingresar un numero poitivo")
    else {
     let division = numero1 / numero2;
     console.log(division);
    }
    break;
  }
 }
}

const validarNumeros = (numero1, numero2) => {
 if (typeof (numero1) !== 'number'|| typeof (numero2) !== 'number' ) {
  return false
 }
 else
  return true 
}

const validarOperador = (operador) => {
 if (operador != "+" || operador != "-" || operador != "*" || operador != "/" ) {
  return false
 }
 else 
  return true
}

calculadora(2, "+", 2);
calculadora(2, "*", 2);
calculadora(4, "/", 2);
calculadora(2, "/", 0);


