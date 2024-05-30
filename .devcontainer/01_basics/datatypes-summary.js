// primitives

// 7 types :   string,boolean,number,bigint,null,undefined,symbol

// let  name = "hello" 
// console.log(typeof name);

// let decision = true
// console.log(decision);
// console.log(typeof decision);

// let  value;
// console.log(typeof value);

// let bignumber =  49358724957295n
// console.log(bignumber);
// console.log(typeof bignumber);

// refernce type or non-prmitive

// arrays,objects, functions
// **************************************************

// stack (primitive),Heap (non-primitive)

// let myname = "yashveerdanu"
// let anothername = myname
// anothername = "rajveer danu"
// console.log(myname);
// console.log(anothername);

let userone = {
    email: "yash@gmail.com",
    name:"yash"
}

let usertwo = userone

usertwo.email = "raj@gmail.com"
console.log(usertwo);
console.log(userone);