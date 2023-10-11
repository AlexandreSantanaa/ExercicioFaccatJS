function executarExercicio70(){
    alert("70) Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido. ")

    let maior= 1, menor=1

    for(let i = 1; i<=100; i++){
        if(maior<=i){
            maior=i
        }
        if(menor>=i){
            menor=i
        }
    }
    alert('Maior = ' + maior + "\nmenor = " + menor)
}