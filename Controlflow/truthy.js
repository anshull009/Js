const mail = "skjnskjnf@wef.com"

if(mail){
    console.log("got mail")
} else{
    console.log("Dont have the mail")
}

// falsy value
// false , 0 , -0,BigInt . "" , null , undefined , Nan

// truthy value
// "0" , "false" , " " , [] ,{} , function(){}



// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")