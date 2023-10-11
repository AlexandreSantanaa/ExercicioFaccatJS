function executarExercicio43() {
  alert("teste de mesa");

  let a = 0,
    b = 0,
    c = 0;
  a = parseInt(prompt("Digite o lado 01 do triangulo"));
  b = parseInt(prompt("Digite o lado 02 do triangulo"));
  c = parseInt(prompt("Digite o lado 03 do triangulo"));
    
  let resposta = "";

  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    if (a == b && b == c) {
      resposta = "Triângulo Equilátero";
    } else if (a == b || b == c || a == c) {
      resposta = "Triângulo Isósceles";
    } else {
      resposta = "Triângulo Escaleno";
    }
  } else {
    resposta = "Não e possível formar um triângulo";
  }

  alert(resposta);
}
