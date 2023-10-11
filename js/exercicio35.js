function executarExercicio35(){
    alert("35) Um posto está vendendo combustíveis com a seguinte tabela de descontos: \nEscreva  um  algoritmo  que  leia  o  número  de  litros  vendidos  e  o  tipo  de  combustível  (codificado  da seguinte  forma:  A-álcool,  G-gasolina),  calcule  e  imprima  o  valor  a  ser  pago  pelo  cliente  sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. ")

    let tipoCombustivel = prompt("G-gasolina\nA-Alcool")
    let litrosVendidos = parseFloat(prompt("Digite a quantidade de combustivel que deseja colocar:"))

    let valor = (tipoCombustivel=='G' || tipoCombustivel == "g")
        ?(litrosVendidos<=20)
            ?litrosVendidos*3.30-(litrosVendidos*3.3*0.03)
                :litrosVendidos*3.30-(litrosVendidos*3.3*0.05)
        :(tipoCombustivel=='A' || tipoCombustivel == "a")
            ?(litrosVendidos<=20)
                ?litrosVendidos*2.9-(litrosVendidos*2.9*0.04)
                :litrosVendidos*2.9-(litrosVendidos*2.9*0.06)
        :undefined
                alert(" o valor do combustivel " + tipoCombustivel + " é de: R$"+valor)
}