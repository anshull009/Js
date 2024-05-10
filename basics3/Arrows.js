const user={
    username : "Anshul",
    price : 999,

    welcomeMsg : function(){

        console.log(`Welcome, ${this.username}`) // this means current context ko refer karta ha
        console.log(this)
    }

}

// user.welcomeMsg()
// user.username = "Charu"
// user.welcomeMsg()
// console.log(this)

// function coffe ()
// {
//     let username = "ANSHUL"
//     console.log(this.username)
// }

// coffe()

// const chai = function(){
//     let username = "ANSHUL"
//     console.log(this.username)
// }

// chai()

// const chai = ()=> { // this is an arrow function
//     let username = "ANSHUL"
//     console.log(this)
// }

// chai()

//()=>{} // basic syntax of arrow function

// const addtwo = (num1,num2) =>{

//     return num1+num2

// }

// console.log(addtwo(3,4))


//const addtwo = (num1,num2) => num1+num2 // this is implicite return 

// const addtwo = (num1,num2) => ({username : "Anshul"}) // returning obj in arrow function

console.log(addtwo(3,4))