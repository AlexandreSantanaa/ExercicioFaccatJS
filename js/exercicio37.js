function executarExercicio37() {
  alert(
    "37) Uma fruteira está vendendo frutas com a seguinte tabela de preços: \nAté 5 Kg Acima de 5 Kg \nMorango R$ 2,50 por Kg R$ 2,20 por Kg \nMaçã R$ 1,80 por Kg R$ 1,50 por Kg \nSe o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda  um  desconto  de  10%  sobre  este  total.  Escreva  um  algoritmo  para  ler  a  quantidade  (em  Kg)  de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente."
  );

  let quantidadeMacas = parseFloat(
    prompt("Digite a quantidade de maças em KG")
  );
  let quantidadeMorango = parseFloat(
    prompt("Digite a quantidade de morangos em KG")
  );

  let valor = 0;
  
  if (quantidadeMacas <= 5) {
    valor = 1.8 * quantidadeMacas;
  } else if (quantidadeMacas > 5) {
    valor = 1.5 * quantidadeMacas;
  }

  if (quantidadeMorango <= 5) {
    valor = 2.5 * quantidadeMorango + valor
  } else if (quantidadeMorango > 5) {
    valor = 2.2 * quantidadeMorango + valor
  }

  alert("o valor total a se pagar pela compra das maças e morangos é de:R$" + valor)
}
