function executarExercicio36() {
  alert(
    "36)  Escreva  um  algoritmo  que  leia  as  idades  de  2  homens  e  de  2  mulheres  (considere  que  as  idades dos  homens  serão  sempre  diferentes  entre  si,  bem  como  as  das  mulheres).  Calcule  e  escreva  a  soma das  idades  do  homem  mais  velho  com  a  mulher  mais  nova,  e  o  produto  das  idades  do  homem  mais novo com a mulher mais velha."
  );

  let idadeHomem01 = parseInt(prompt("Digite a nota do primeiro homem"));
  let idadeHomem02 = parseInt(prompt("Digite a nota do segundo homem"));

  let idadeMulher01 = parseInt(prompt("Digite a nota da primeira mulher"));
  let idadeMulher02 = parseInt(prompt("Digite a nota da segunda mulher"));

  let homemVelho = 0,
    homemNovo = 0,
    mulherNova = 0,
    mulherVelha = 0;

  //   if (idadeHomem01 > idadeHomem02) {
  //     homemVelho = idadeHomem01;
  //     homemNovo = idadeHomem02;
  //   } else {
  //     homemVelho = idadeHomem02;
  //     homemNovo = idadeHomem01;
  //   }

  //   if (idadeMulher01 > idadeMulher02) {
  //     mulherVelha = idadeMulher01;
  //     mulherNova = idadeMulher02;
  //   } else {
  //     mulherVelha = idadeMulher02;
  //     mulherNova = idadeMulher01;
  //   }

  // Encontrar o homem mais velho
  homemVelho = Math.max(idadeHomem01, idadeHomem02);

  // Encontrar o homem mais novo
  homemNovo = Math.min(idadeHomem01, idadeHomem02);

  // Encontrar a mulher mais nova
  mulherNova = Math.min(idadeMulher01, idadeMulher02);

  // Encontrar a mulher mais velha
  mulherVelha = Math.max(idadeMulher01, idadeMulher02);

  let soma = homemVelho + mulherNova;
  let produto = homemNovo * mulherVelha;

  alert(
    "Soma das idades do homem mais velho com a mulher mais nova: " +
      soma +
      "\nroduto das idades do homem mais novo com a mulher mais velha: " +
      produto
  );
}
