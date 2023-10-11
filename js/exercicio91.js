function executarExercicio91() {
  alert(
    "91)  Faça  um  algoritmo  para  ler  50  números  e  armazenar  em  um  vetor  VET,  verificar  e  escrever  se existem números repetidos no vetor VET e em que posições se encontram."
  );

  let vet = [],
    tamanhoVetor = 5;

  for (let i = 0; i < tamanhoVetor; i++) {
    vet[i] = parseFloat(prompt("Digite o " + (i + 1) + "°numero:"));
  }

  for (let i = 0; i < tamanhoVetor; i++) {
    for (let j = i+1; j < tamanhoVetor; j++) {
      if (vet[i] == vet[j]) {
        console.log(
            "vetor[" + i + "] = vetor[" + j + "] -> " + vet[i] + " = " + vet[j]
            );
      }
    }
  }
}
