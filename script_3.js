// defini le nombre d'etage par l'utilisateur
let stage = prompt("Combien d'étage veux tu dans ta pyramide ?");
stage = parseInt(stage, 10);
// on defini le nombre d'espace a venir avant la pyramide soit etages - 1
let space = stage;
function pyramid(stage) {
  let n = 0;
  if (stage === 0) {
    console.log("pas d'étage donné");
  } else if (Math.sign(stage) === -1) {
    console.log("c'est pas la pyramide de Ramsès loufoque");
  } else if (isNaN(stage)) {
    console.log("Ceci n'est pas un nombre");
  } else {
    // on fait une boucle pour definir les étages et les espaces
    for (i = 1; i <= stage; i++ && space--) {
      n += 1;
      // repeat permet de répéter le string le nombre de fois voulu
      console.log(" ".repeat(space) + "#".repeat(i) + "  " + n);
    }
  }
}
pyramid(stage);
