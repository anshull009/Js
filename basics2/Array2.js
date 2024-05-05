const hero = ["Thor" , "IronMan" , "SpiderMan"]
const hero2 = ["Flash" , "Superman" , "Batman"]
// const a = hero.concat(hero2)
// console.log(a)

const all_hero = [...hero,...hero2]
console.log(all_hero)

const ch = [1,[2,3,4],5,6,[5,6,9,8,7,5]]
const maa = ch.flat(Infinity)
console.log(maa)

console.log(Array.from("Anshul"))
console.log(Array.from({name:"hitesh"}))//intresting case

let score1 = 100
let score2 = 500
let score3 = 300

console.log(Array.of(score1 , score2 ,score3))