// 2.1.1 : Hello World
console.log("Bonjour monde");

// 2.1.2 Bonjour
let name = prompt("Quel est ton nom ? :");
if (name === "") {
  console.log("Bonjour inconnu !");
} else {
  console.log(`Bonjour, ${name} !`);
}
