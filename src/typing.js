const types = [
  {
    name: "normal",
    color: "#A8A878",
  },
  {
    name: "fire",
    color: "#EF8031",
  },
  {
    name: "water",
    color: "#6890F0",
  },
  {
    name: "grass",
    color: "#78C850",
  },
  {
    name: "electric",
    color: "#F8D030",
  },
  {
    name: "ice",
    color: "#98D8D8",
  },
  {
    name: "fighting",
    color: "#C03028",
  },
  {
    name: "poison",
    color: "#A040A0",
  },
  {
    name: "ground",
    color: "#E0C068",
  },
  {
    name: "flying",
    color: "#A890F0",
  },
  {
    name: "psychic",
    color: "#F85888",
  },
  {
    name: "bug",
    color: "#A8B820",
  },
  {
    name: "rock",
    color: "#B8A038",
  },
  {
    name: "ghost",
    color: "#705898",
  },
  {
    name: "dark",
    color: "#705848",
  },
  {
    name: "dragon",
    color: "#7038F8",
  },
  {
    name: "steel",
    color: "#B8B8D0",
  },
  {
    name: "fairy",
    color: "#F0B6BC",
  },
];

let power = 85;
let attk = 112;
let SpAttk = 109;
let def = 90;
let SpDef = 90;
let arr=[1, 1.5];
let crit = arr[Math.floor(arr.length*Math.random())];
let stab = 1;
let type = 2;
let hp = 105;
let category="Physical";
let formula1,formula2;
formula1 = ((0.25 * power * (attk / def) * crit) * stab * type) * hp;
formula2 = ((0.25 * power * (SpAttk / SpDef) * crit) * stab * type) * hp/100;
console.log(formula2)
