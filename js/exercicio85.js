function executarExercicio85() {
  alert(
    "85) Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os dias do ano. Calcular e escrever: Na) Menor temperatura do ano Nb) Maior temperatura do ano Nc) Temperatura média anual \nd) O número de dias no ano em que a temperatura foi inferior a média anual"
  );

  let diasAno = 365,
    temperaturaSoma = 0,
    temperaturaDia = [],
    temperaturaMax = 40,
    temperaturaMin = 8,
    maiorTemperatura = 0,
    menorTemperatura = 0,
    contadorDiaAbaixoMedia = 0,
    temperaturaMedia = 0;

  for (let dias = 1; dias <= diasAno; dias++) {
    temperaturaDia[dias] = gerarNumeroAleatorio(temperaturaMax, temperaturaMin);
    temperaturaSoma += temperaturaDia[dias];
    console.log(temperaturaDia[dias]);
  }

  temperaturaMedia = temperaturaSoma / diasAno;

  for (let dias = 1; dias <= diasAno; dias++) {
    maiorTemperatura =
      temperaturaDia[dias] > maiorTemperatura
        ? temperaturaDia[dias]
        : maiorTemperatura;
    
        menorTemperatura =
      dias == 1
        ? temperaturaDia[dias]
        : temperaturaDia[dias] < menorTemperatura
        ? temperaturaDia[dias]
        : menorTemperatura;
    
        contadorDiaAbaixoMedia += temperaturaDia[dias] < temperaturaMedia ? 1 : 0;
  }

  alert(
    "A-maior temperatura:" +
      maiorTemperatura +
      "°C\nB- menor temperatura:" +
      menorTemperatura +
      "°C\nC-media temperatura:" +
      temperaturaMedia +
      "°C\nd-dia com temperatura menor que a media:" +
      contadorDiaAbaixoMedia
  );
}

function gerarNumeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}
