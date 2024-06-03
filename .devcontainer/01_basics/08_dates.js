// dates

// let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toDateString());

// let newdate = new Date(2024, 0 ,15)
// console.log(newdate.toDateString());

// let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

console.log(newdate.toLocaleDateString('default',{
    weekday : "long"
}))