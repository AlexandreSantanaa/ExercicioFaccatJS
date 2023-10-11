function executarExercicio28(){
    alert("28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.")

    let valor01=0, valor02=0, valor03=0, maior=0, menor=0

    valor01 = parseFloat(prompt("Digite um numero:"))
    valor02 = parseFloat(prompt("Digite um numero:"))
    valor03 = parseFloat(prompt("Digite um numero:"))

    // maior = (valor03<valor01 && valor01>valor02) ? valor01 : (valor03<valor02 && valor02>valor01) ? valor02 : valor03//
    // menor = (valor03>valor01 && valor01<valor02) ? valor01 : (valor03>valor02 && valor02<valor01) ? valor02 : valor03

    maior = Math.max(valor01,valor02,valor03)
    menor = Math.min(valor01,valor02,valor03)
    

    alert("maior=" + maior + "\nmenor="+menor)

}