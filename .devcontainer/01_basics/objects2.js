const tinderuser = new Object();

tinderuser.name = "yash"
 tinderuser.email = "yash@gmail.com"
 tinderuser.age = 21
// console.log(tinderuser);

const regularuser =
{
    details : {
        username : "yash",
        lastname : "danu"

    }
}
// console.log(regularuser);

const obj1 = {1: 'a',2: 'b'}
const obj2 = {3: 'c' , 4: 'd'}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2} //spread function
// console.log(obj3);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('age'));

// OBJECT DE-STRUCTURE
const course = {
    coursename  : "javascript",
    courseId :  "123",
    instructorname : "hitesh_sir",
    price : "999"

}

const {coursename : name} = course
console.log(name);