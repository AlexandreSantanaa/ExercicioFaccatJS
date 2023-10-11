function executarExercicio90() {
  alert(
    "90)  Faça  um  algoritmo  para  ler  um  vetor  de  30  números.  Após  isto,  ler  mais  um  número  qualquer, calcular e escrever quantas vezes esse número aparece no vetor. "
  );

  let vetor = [],
    quantidadeVetor = 30,
    numero = 0,
    vezesIguais = 0;

  for (let i = 0; i < quantidadeVetor; i++) {
    vetor[i] = parseFloat(prompt("Digite o " + (i + 1) + "°numero:"));
  }

  numero = parseFloat(prompt("Digite um valor"));

  for (let i = 0; i < quantidadeVetor; i++) {
    vezesIguais += vetor[i] == numero ? 1 : 0;
  }

  alert(numero + " aparece " + vezesIguais + " vezes no vetor")
}
