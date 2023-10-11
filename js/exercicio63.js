function executarExercicio63(){
    alert("63)  Escreva  um  algoritmo  para  ler  10  números  e  ao  final  da  leitura  escrever  a  soma  total  dos  10 números lidos.")

    let soma=0, numero = 0

    for(let i = 0; i<=9; i++){
        numero = parseFloat(prompt("Digite um numero:"))

        soma+=numero
    }

    alert("A soma é " + soma)
}