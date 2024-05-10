// Imideatly Invoked Functiopn Expression (IIFE)

(function heheh (){
    console.log(`Db Connected`)
})();
// in the upgiven line by just adding the whole function inside the ( ) we can imideatly call the function with the help os this brakets()
// why we use iife golbal scope ke pollution se jop problem hoti hai usko kam karne ke liye we use iife
((name)=> {
    console.log(`hii ${name}`)
})("Anshul")