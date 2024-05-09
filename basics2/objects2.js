// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

 //console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a" , 2:"b"}
// const obj2 = {3:"a" , 4:"b"}
// const obj4 = {5:"c" , 6:"d"}
// const obj5 = {7:"c" , 8:"d"}

// //const obj3 = {obj2 , obj1}
// // const obj3 = Object.assign({},obj1,obj2,obj4,obj5)
// const obj3 = {...obj1,...obj2,...obj4,...obj5}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

 // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename: "Java Basics",
    price : "124",
    courseInstructor: "Hitesh sir"
 }

//  console.log(course.courseInstructor)

const{courseInstructor : instructor} = course
// in the line 64 ive made a shortcut to use the courseIntructor and gave it a nick name to call the key with this replace the traditional method of accesing the object with . notation
console.log(instructor)