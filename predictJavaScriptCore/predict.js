// Problem 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); //Tesla
console.log(otherRandomCar); //Mercedes
// By using the comma when destructuring we can skip indexes starting at the zero index

// Problem 2
const employee = {
    employeeName: "Elon",
    age: 47,
    company: "Tesla",
};
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName); //Elon
console.log(employeeName); // error
// We are reassigning the value for employeeName to a variable called otherName
// Trying to console log gives us an error because employeeName is a key in an object and
// we can't just call it without the proper syntax
// We would need to use the correct syntax to get the value for employeeName. Ex employee['employeeName']

// Problem 3
const person = {
    name: "Phil Smith",
    age: 47,
    height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //undefined
// We got this ouput because password is not a key in the person object. Therefore
// we got an undefined value. We can add password as a key to fix this code

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
const [, , , , four] = numbers;
//Predict the output
console.log(first === second); //False
console.log(first === third); // True
console.log(four);
// We are comparing the numerical values and seeing if they match or not

// Problem 5
const lastTest = {
    key: "value",
    secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); // value
console.log(secondKey); // [1,5,1,8,3,3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5
console.log(secondKey[secondKey.length - 1]); // 3
//Code is just outputting the things we destructured from the object and array

// Problem 6
var beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + " was found at index " + index);
        }
        console.log("name and index after loop is " + name + ":" + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);
//  I believe we have two scopes. The printNames and actuallyPrintingNames scopes.
// out will be:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

// Problem 7
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + " was found at index " + index);
    }
    console.log("name and index after loop is " + name + ":" + index);
}
// We never called the function

// Problem 8
const beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + " was found at index " + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);
// Not running into an error when running this problem. Output is: 
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

// Problem 9
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) //true
console.log(planet === planetCopy) // false
// We are able to see that the string 'gas' is equal to itself.
// With checking to see if the objects are equal to each other, we can see that they are 
// because the strict comparison notices that they are not located at the same memory address
// therefore it is not the same.


