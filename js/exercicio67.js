function executarExercicio67(){
    alert("67)  Faça  um  algoritmo  que  calcule  e  escreva  a  média  aritmética  dos  números  inteiros  entre  15 (inclusive) e 100 (inclusive")

    let media=0, contador=0
    for(let numero = 15; numero<=100; numero++){
        media +=numero
        contador++
    }
    media = media/contador

    alert("media = " + media)
}