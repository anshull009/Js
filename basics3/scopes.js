// let a = 10
// const b = 20
// var c = 30

// console.log(a,b,c)

// the upgiven variables are in global scopes but var is going to behave diffrently because it has some problems with the scopes

// lets see an example of scopes for var keyword
if(true){
    let a = 10
    const b = 20
     var c = 30
     d =5 // we acn acces this and var both out of the scope too its a bad practice thats why we should never use var

}

// console.log(c ,d)

function one(){

    const usename = "Hitesh"

    function two(){
        const web = "www.google.com"
        // console.log(usename)
    }

   // console.log(web)
    two()
}

// one()

if(true){
    const user ="Anshul"
    if(user === "Anshul"){
        const website = "youtube"
        console.log(user + website)
    }
}

