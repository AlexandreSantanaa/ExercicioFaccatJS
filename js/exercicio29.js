function executarExercicio29(){
    alert("29)  Ler  3  valores  (considere  que  não  serão  informados  valores  iguais)  e  escrever  a  soma  dos  2 maiores. ")

    let valor01=0, valor02=0, valor03=0, maior=0, menor=0, medio=0

    valor01 = parseFloat(prompt("Digite um numero:"))
    valor02 = parseFloat(prompt("Digite um numero:"))
    valor03 = parseFloat(prompt("Digite um numero:"))
    //3 2 1 
    // maior = (valor01>valor02 && valor01>valor03)? valor01: (valor02>valor01 && valor02>valor03)? valor02 : valor03//3
    // menor = (valor01<valor02 && valor01<valor03)? valor01: (valor02<valor01 && valor02<valor03)? valor02 : valor03//1

    maior = Math.max(valor01,valor02,valor03)
    menor = Math.min(valor01,valor02,valor03)

    medio = valor01+valor02+valor03-maior-menor
    
    let soma = maior+medio

    alert("menor:"+menor+"\nmedio:"+medio+"\nmaior:"+maior+"\nsoma(medio+maior):"+soma)
}