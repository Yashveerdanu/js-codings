const marvel_heroes = ["ironman","thor","hulk","spiderman"]
const dc_heroes = ["batman","superman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// concatination

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

// spread

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

// flat

const realarr = [1,2,3,[4,5,6],7,[8,9,[7,5,2]]]
const anotherarr = realarr.flat(Infinity)

// console.log(anotherarr);


// console.log(Array.isArray("YASH"));
// console.log(Array.from("YASH"));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


