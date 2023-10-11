function executarExercicio40(){
    alert("40)  Faça  um  algoritmo  para  ler:  a  descrição  do  produto  (nome),  a  quantidade  adquirida  e  o  preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:  \n- Se quantidade  <= 5  o desconto será de 2%\n- Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3%\n- Se quantidade  >  10 o desconto será de 5%")

    let nome = prompt("Digite o nome do produto")
    let quantidadeAdquirida = parseInt(prompt("Digite a quantidade adquirida do produto " + nome))
    let precoUnitario = parseFloat(prompt("Digite o valor da unidade de " + nome))
    let total = precoUnitario*quantidadeAdquirida
    let valor =0 

    if(quantidadeAdquirida<=5){
        valor = total-(total*0.02)
    }else if(quantidadeAdquirida>5 && quantidadeAdquirida<=10){
        valor = total-(total*0.03)
    }else{
        valor = total-(total*0.05)
    }

    alert('o valor total da compra foi de:R$'+valor)
}