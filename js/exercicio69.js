function executarExercicio69() {
  alert(
    "69) O mesmo exercício anterior, mas agora não será informado o número de mercadorias em estoque. Então  o  funcionamento  deverá  ser  da  seguinte  forma:  ler  o  valor  da  mercadoria  e  perguntar  ‘MAIS MERCADORIAS  (S/N)?’.  Ao  final,  imprimir  o  valor  total  em  estoque  e  a  média  de  valor  das mercadorias em estoque."
  );

  let valorTotal = 0,
    contador = 0,
    confirmacao = 1;

  do {
    contador++;

    let valorMercadoria = parseFloat(
      prompt("Digite o valor da mercadoria " + contador)
    );
    valorTotal += valorMercadoria;

    confirmacao = parseInt(prompt("Mais mercadorias?\n1-sim\n2-não"));
  } while (confirmacao < 2);

  let mediaMercadoria = valorTotal / contador;

  alert("O valor total em estoque é: R$" + valorTotal);
  alert("A média de valor das mercadorias é: R$" + mediaMercadoria);
}
