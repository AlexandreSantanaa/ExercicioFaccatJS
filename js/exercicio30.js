function executarExercicio30(){
    alert("30)  Ler  3  valores  (considere  que  não  serão  informados  valores  iguais)  e  escrevê-los  em  ordem crescente. ")

    let valor01=0, valor02=0, valor03=0, maior=0, menor=0, medio=0


    valor01 = parseFloat(prompt("Digite um numero"))
    valor02 = parseFloat(prompt("Digite um numero"))
    valor03 = parseFloat(prompt("Digite um numero"))

    // if(valor01>valor02 && valor01>valor03){
    //     maior = valor01
    //     if(valor02>valor03){
    //         medio=valor02
    //         menor=valor03
    //     }else{
    //         medio=valor03
    //         menor=valor02
    //     } 
    // }

    // if(valor02>valor01 && valor02>valor03){
    //     maior = valor02
    //     if(valor01>valor03){
    //         medio=valor01
    //         menor=valor03
    //     }else{
    //         medio=valor03
    //         menor=valor01
    //     } 
    // }

    // if(valor03>valor02 && valor03>valor01){
    //     maior = valor03
    //     if(valor02>valor01){
    //         medio=valor02
    //         menor=valor01
    //     }else{
    //         medio=valor01
    //         menor=valor02
    //     } 
    // }

    maior = Math.max(valor01, valor02, valor03)
    menor = Math.min(valor01, valor02, valor03)

    medio = valor01+valor02+valor03-maior-menor
    alert(menor + " " + medio + " " + maior)
}