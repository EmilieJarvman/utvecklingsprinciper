// ------------   KOD 1   ------------ //

/* 
let cars = ['volvo', 'saab', 'bmw', 'tesla'];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
*/

let cars = ["volvo", "saab", "bmw", "tesla"];

for (let car in cars) {
    console.log(cars[car]);
 }





// ------------   KOD 2   ------------ //

/* 
let cars = ['volvo', 'saab', 'bmw', 'tesla'];
let fruits = ['apple', 'banana', 'orange'];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
*/


let cars = ["volvo", "saab", "bmw", "tesla"];
let fruits = ["apple", "banana", "orange"];
let combine = cars.concat(fruits);

function printTwoLists(array) {
    array.forEach(list => console.log(list));
}

printTwoLists(combine);







// ------------   KOD 3   ------------ //

/* 
let x = ['rose', 'tulip', 'lily', 'orchid']
function asdasd (banana) {
    for (let i = 0; i < banana.length; i++) {
        console.log(banana[i]);
    }
}
asdasd(x);
*/


let flowers = ['rose', 'tulip', 'lily', 'orchid']
function logArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
logArray(flowers);


// Alternativ lösning med forEach:

/*
let flowers = ["rose", "tulip", "lily", "orchid"]

function printList (array) {
     array.forEach(list => console.log(list));
}

printList(flowers);
*/
