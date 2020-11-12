function codeLife(code) {
  let codeSplit = code.match(/.{1,3}/g);
  console.log(codeSplit);

  codeSplit.forEach((splitWord, index) => {
    if (
      "UCU" === splitWord ||
      "UCC" === splitWord ||
      "UCA" === splitWord ||
      "UCG" === splitWord ||
      "AGU" === splitWord ||
      "AGC" === splitWord
    )
      codeSplit[index] = "Sérine";

    if (
      "CCU" === splitWord ||
      "CCC" === splitWord ||
      "CCA" === splitWord ||
      "CCG" === splitWord
    )
      codeSplit[index] = "Proline";

    if ("UUA" === splitWord || "UUG" === splitWord)
      codeSplit[index] = "Leucine";

    if ("UUU" === splitWord || "UUC" === splitWord)
      codeSplit[index] = "Phénylalanine";

    if (
      "CGU" === splitWord ||
      "CGC" === splitWord ||
      "CGA" === splitWord ||
      "CGG" === splitWord ||
      "AGA" === splitWord ||
      "AGG" === splitWord
    )
      codeSplit[index] = "Arginine";

    if ("UAU" === splitWord || "UAC" === splitWord)
      codeSplit[index] = "Tyrosine";
  });
  return codeSplit.join("-");
}
console.log(codeLife("CCGUCGUUGCGCUACAGC"));
console.log(codeLife("CCUCGCCGGUACUUCUCG"));
