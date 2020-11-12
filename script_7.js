let userAnwser = prompt("Tu veux parler avec notre Acné-Bot ?");

function bot(userAnwser) {
  if (userAnwser.match(/[?]/g)) {
    return "Ouais Ouais...";
  }
  if (userAnwser === "") {
    return "t'es en PLS ?";
  }
  if (userAnwser.match(/fornite/gi)) {
    return "on s' fait une partie soum-soum ?";
  }
  if (userAnwser === userAnwser.toUpperCase()) {
    return "Pwa, calme-toi...";
  } else {
    return "balek.frère !!!";
  }
}
console.log(bot(userAnwser));
