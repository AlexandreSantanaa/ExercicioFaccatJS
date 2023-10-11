function executarExercicio16(){
    alert("16)  As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia,  e  R$  1,00  se  forem compradas  pelo  menos  12.  Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra.")

    let quantidadeMaca = parseInt(prompt("Digite a quantidade de maças compradas:"))
    let valorMaca

    if(quantidadeMaca>=12){
        valorMaca=quantidadeMaca*1    
    }else{
        valorMaca=quantidadeMaca*1.30
    }

    alert("o valor total pela compra das maças é de:R$"+valorMaca)
}