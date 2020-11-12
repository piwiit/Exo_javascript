let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");
function fact(nbr) {
  if (nbr === 0) {
    return 1;
  } else if (nbr === "") {
    return "pas de nombre donné";
  } else if (Math.sign(nbr) === -1) {
    return " ce n'est pas un nombre positif";
  } else {
    return nbr * fact(nbr - 1);
  }
}
console.log(`Le résultat est : ${fact(nbr)}`);
