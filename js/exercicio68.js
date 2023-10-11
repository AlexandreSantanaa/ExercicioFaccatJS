function executarExercicio68(){
    alert("68) Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo que  permita  a  entrada  das  seguintes  informações:  a)  o  número  total  de  mercadorias  no  estoque;  b)  o valor  de  cada  mercadoria.  Ao  final  imprimir  o  valor  total  em  estoque  e  a  média  de  valor  das mercadorias. ")

    let numeroTotalMercadorias = parseInt(prompt("Digite o numero total de mercadorias"))
    let valorTotal = 0 

    for(let i = 1; i<=numeroTotalMercadorias; i++){
        let valorMercadoria = parseFloat(prompt("Digite o valor da mercadoria " + i))
        valorTotal += valorMercadoria
    }

    let mediaMercadoria = valorTotal/numeroTotalMercadorias

    alert("O valor total em estoque é: R$" + valorTotal);
    alert("A média de valor das mercadorias é: R$" + mediaMercadoria);
}

