function ans(){
    console.log("This is function")
}
// ans()
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
   
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage(username)
// {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Hitesh"));



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))


// function calculate_item_price(num1){
//     return num1
// }

// console.log(calculate_item_price(100))

//Now in the upgiven function what if the items in thee cart keep on increasing then the function will only take one argument then at such cases we use (...) rest operator this is also the spread operator  it depends on the use case what it is going to get called       

function calculate_item_price(...num1){
    return num1
}

// console.log(calculate_item_price(100,200,300,400))

const user = {

    username : "Anshul",
    price : 125
}

// function handleObj (anyobj)
// {
//     console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
// }
// handleObj(user)

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const mynewarr = [200,300,100,500]

function arr_accept(Arr){
    console.log(Arr)
}

arr_accept(mynewarr)