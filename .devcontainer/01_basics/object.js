// singleton
// object create

// object literals

const mysim = Symbol("key1")
const jsuser = {
    "name" : "yash",
    full_name : "yashveerdanu",
    [mysim] : "key1",
    "class" : "bca",
    "email" : "yashudanu856@gmail.com",
    "isloggedin" : ["monday","sunday"]
}

// console.log(jsuser["name"]);
// console.log(jsuser[mysim]);
// console.log(jsuser.full_name);

jsuser.full_name = "rajveerdanu"
// console.log(jsuser.full_name);

jsuser['email'] = "rajveer@gmail.com"
// console.log(jsuser['email']);
// console.log(jsuser);

// functions

jsuser.greetings = function()
{
    console.log("hi js user");

}
jsuser.greetingstwo = function()
{
    console.log(`hi js user, ${this.full_name},your welcome`);

}
console.log(jsuser.greetings());
console.log(jsuser.greetingstwo());