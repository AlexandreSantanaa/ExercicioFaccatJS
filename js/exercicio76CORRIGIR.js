function executarExercicio76(){
    alert("76) Imagine que exista um comando chamado posiciona (x,y) em alguma linguagem de programação.  Onde  o  X  representaria  a  coluna  que  algo  deve  ser  impresso  na  tela,  e  Y  a  linha  que algo deve ser impresso na tela. Desta forma, o algoritmo abaixo: início posiciona \n(10,2) \nescrever ‘Olá’ \nfim \nEscreveria  a  palavra  ‘Olá’  na  segunda  linha  da  tela,  a  partir  da  10  coluna.  Baseado  nesta  situação, escreva um algoritmo, utilizando este comando 'posiciona' citado, que desenhe na tela um retângulo de 60 colunas (a partir da coluna 1 da tela) e 10 linhas (a partir da linha 1 da tela), sendo que a borda deste retângulo será formada pelo caractere ‘+’.  Lembre que somente a primeira e última linha deverão  ter todas as colunas preenchidas com o caractere ‘+’. As demais linhas (entre 2 e 9) só terão as colunas 1 e 60 preenchidas. A aparência deste retângulo deve ser parecida com a figura abaixo:")

    for(let colunaX = 1; colunaX<=60; colunaX++){
        for(let linhaY = 1; linhaY=10; linhaY++){
            posiciona = [colunaX, linhaY]
            if(linhaY==1 || linhaY == 10 ){
                console.log(posiciona["","+"])
            }
            if(colunaX == 1 || colunaX == 60){
                console.log(posiciona["+",""])
            }
        }
    }
}