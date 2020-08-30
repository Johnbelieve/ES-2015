//1 Convert the following es5 code blocks into es2015 code:
var person = {
    fullName: "Harry Potter",
    sayHi: function () {
        setTimeout(() => {
            console.log(`Your name is ${this.fullName}`)
        }, 1000)
    }
}
console.log(person.sayHi())



//2. var name = "Josie"
// console.log("When " + name + " comes home, so good")

var name = "Josie"
console.log(`When ${name} comes home, so good`)



//3 var DO_NOT_CHANGE = 42 ;
// DO_NOT_CHANGE = 50; // stop me from doing this!

const DO_NOT_CHANGE = 42;
console.log(DO_NOT_CHANGE)



//4. var arr = [ 1 , 2 ]
// var temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

var arr = [1, 2]
var [y, z] = arr;
var temp = y
arr = [z, y]




//5. Rewite to ES2015
//  function double(arr) {
//     return arr.map(function (val) {
//         return val * 2
//     });
// }
const double = (arr) => {
    return arr.map((val) => val * 2)
}
console.log(double([1, 2, 3, 4]))




//6. Rewite to ES2015
//  var obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     }
// }
// var a = obj.numbers.a;
// var b = obj.numbers.b;

var obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
let { a, b } = obj.numbers
console.log(b)




//7. Rewite to ES2015
//  function add(a, b) {
//     if (a === 0) a = 0
//     else {
//         a = a || 10
//     }
//     if (b === 0) b = 0
//     else {
//         b = b || 10
//     }
//     return a + b
// }

const add = (a = 10, b = 10) => { return a + b }
console.log(add(0, 0))


/*  Research the following functions - what do they do?
1. Array.from: it is a method that returns an Array object from any object witha length property or an iterable object.

2. Object.assign: This method copies all enumerable own properties from one or more sources
    objects to a target object. it returns the target object.
    The syntax is: Object.assign(traget, ...sources)

3. Array.includes: This array method checks if an arrray contains the element. Returns true
    if it contains, and false if it does not contain the element.
    The syntax is array.includes(searchElement, startIndex)

4. String.startsWith: This method determnines whelther a string begins with the characters of the
    specified string.
    the syntax is String.startWith(searchValue, start)
*/