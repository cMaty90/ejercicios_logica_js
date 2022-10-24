const conversorDeTemperatura = (temperatura) => {
 let indiceGrados = temperatura.indexOf('°');
 let numero = parseFloat(temperatura.substring(0, indiceGrados));
 let simbolo = temperatura.substring(indiceGrados);

 if (simbolo == "°C" || simbolo == "°F") {
  if (simbolo == "°C") {
  let conversionFahrenheit = (numero * 1.8) + 32;
  console.log(conversionFahrenheit+"°F");
  }

  else if (simbolo == "°F") {
   let conversionCelsius = parseInt((numero - 32) / (1.8));
   console.log(conversionCelsius + "°C"); 
  }
 }

 else {
  console.log("Error")
 }
}

conversorDeTemperatura("35°C");
conversorDeTemperatura("19°F");
conversorDeTemperatura("33");
