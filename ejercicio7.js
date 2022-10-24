const calculadoraDiasRestantes = (fechaFinal) => {
 let fechaActual = new Date();

 let diaFechaFinal = parseInt(fechaFinal.substring(3,5));
 let mesFechaFinal = parseInt(fechaFinal.substring(0,2));
 let añoFechaFinal = parseInt(fechaFinal.substring(6));

 let mesActual = parseInt(fechaActual.getMonth()) + 1;
 let fecha_inicio = new Date(fechaActual.getFullYear(), mesActual, fechaActual.getDate()).getTime();

 let fecha_final = new Date(añoFechaFinal, mesFechaFinal, diaFechaFinal).getTime();

 let diasRestantes = fecha_final - fecha_inicio;
 let diasRestantesEnMilisegundos = diasRestantes / (1000 * 3600 * 24); 

 console.log(`${diasRestantesEnMilisegundos} dias`)

}

calculadoraDiasRestantes("11/06/2022");
calculadoraDiasRestantes("12/17/2022")
