function executarExercicio66() {
  alert(
    "66)  O  mesmo  exercício  anterior,  mas  agora,  considere  que  o  segundo  valor  lido  poderá  ser  maior  ou menor que o primeiro valor lido, ou seja, deve-se testá-los"
  );

  let numero01 = 0,
    numero02 = 0,
    soma = 0,
    troca = 0;

  numero01 = parseInt(prompt("Digite um numero"));
  numero02 = parseInt(prompt("Digite outro numero"));

  if (numero02 < numero01) {
    troca = numero02;
    numero02 = numero01;
    numero01 = troca;
  }

  while (numero01 <= numero02) {
    soma += numero01;
    numero01++;
  }
  alert("Soma = " + soma);
}
