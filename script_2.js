let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");
nbr = parseInt(nbr, 10);

function fact(nbr) {
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0) {
    return 1;
  } else if (isNaN(nbr)) {
    return "Ce n'est pas un nombre";
  } else if (Math.sign(nbr) === -1) {
    return " Ce n'est pas un entier positif";
  } else {
    // appelez à nouveau la procédure récursive
    return nbr * fact(nbr - 1);
  }
}
console.log(`Le résultat est : ${fact(nbr)}`);
