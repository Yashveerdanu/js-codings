// arrays

const myarr = [ 2,3,41,6,4,"yash"]
const superhero = ["ironman","batman"]
const newarray = new Array(2,4,5,1)
// console.log(myarr[1]);


// arrays methods

myarr.push(33)
// console.log(myarr);

myarr.pop()
// console.log(myarr);

// myarr.unshift(5)
myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(55))

const ourarr = myarr.join() 
// console.log(ourarr);


// slice,splice

const newn1 = myarr.slice(1,3)
console.log("A", myarr);
console.log(newn1);

const newn2 = myarr.splice(1,3)
console.log("B", myarr);
console.log(newn2);
