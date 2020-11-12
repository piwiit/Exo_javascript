const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 100 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 15 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 25 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 10 },
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let rentedBook = 0;
books.forEach((filter) => {
  if (filter.rented === 0) {
    rentedBook += 1;
  }
});
if (rentedBook > 0) {
  console.log("non");
} else {
  console.log("oui");
}

console.log("Quel est livre le plus emprunté ?");
let mostRented = books.sort(function (a, b) {
  return b.rented - a.rented;
});
console.log(mostRented[0]);

console.log("Quel est livre le moin emprunté ?");
let lessRented = books.sort(function (a, b) {
  return a.rented - b.rented;
});
console.log(lessRented[0]);

console.log("Trouve le livre avec l'ID: 873495");
let found = books.find((filter) => filter.id == 873495);
console.log(found);

console.log("Supprime le livre avec l'ID: 133712");
let deleteBook = books.findIndex((filter) => filter.id == 133712);
books.splice(deleteBook, 1);
console.log(books);

console.log("Trie les livres par ordre alphabétique");
let orderByAlphabetical = books.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
console.log(orderByAlphabetical);
