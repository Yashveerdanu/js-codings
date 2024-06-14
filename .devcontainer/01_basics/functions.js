// function myname(){
//     console.log("y");
//     console.log("a");
//     console.log("s");
//     console.log("h");
// }

// myname()

// function addtwonumbers(a,b){
//     console.log(a + b);
// }
function addtwonumbers(a,b){
    // let result = a + b
    return a + b
}
const result = addtwonumbers(43,76)
// console.log(result);


function loginmessage(username = "yash" ) {
    if(username == undefined){
        console.log("please enter the name");
        return

    }



    return `${username}is logged in`
}
console.log(loginmessage("rajveer"));