const accountId =12345
let accointEmail="Abcd@12345"
var accountPassword = "Password"
accountCity="Imdore"

// accountId =2 // changing the value of const is not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId , accointEmail ,accountPassword , accountCity])