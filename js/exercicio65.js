function executarExercicio65() {
  alert(
    "65) Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro valor lido."
  );

  let numero01=0, numero02=0, soma=0

  do {
    numero01 = parseInt(prompt("Digite um numero"));
    numero02 = parseInt(prompt("Digite outro numero"));
  } while (numero02 <= numero01);

  while(numero01<=numero02){
    soma+=numero01
    numero01++
  }
  alert("Soma = " + soma)
}
