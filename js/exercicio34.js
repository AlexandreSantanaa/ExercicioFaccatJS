function executarExercicio34() {
  alert("Faça o teste de mesa");

  let x = parseInt(prompt("Digite um numero"));
  let y = parseInt(prompt("Digite outro numero"));

  let z = x * y + 5;

  let resposta = z <= 0 ? "A" : z <= 100 ? "B" : "C";

  alert("z=" + z + " " + resposta);
}
