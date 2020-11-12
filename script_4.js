const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

console.log("list les entrepreneurs née de 1970 à 1979");
entrepreneurs.forEach((filter) => {
  if (filter.year >= 1970 && filter.year < 1980)
    console.log(`- ${filter.first} ${filter.last}`);
});

console.log(
  "Sors une array qui contient le prénom et le nom des entrepreneurs"
);
let nemaEntrepreneur = [];
entrepreneurs.forEach((filter) => {
  nemaEntrepreneur.push(`-> ${filter.first} ${filter.last}`);
});

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
entrepreneurs.forEach((filter) => {
  console.log(
    `-> ${filter.first} ${filter.last} aurait ${
      2020 - filter.year
    } ans aujourd'hui`
  );
});

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
entrepreneursByLastName = [];
entrepreneurs.forEach((filter) => {
  entrepreneursByLastName.push(`-> ${filter.last} ${filter.first}`);
});
secondArr = entrepreneursByLastName.sort().join("\n");
console.log(secondArr);
