//Write a program that declares a variable using var, let, and const and prints the value to the console.

var name = "Ankit Ranjan"

let age = 22

const  g = 9.8

console.log("My name is " + name + " with Age " + age + " and the value of g is " + g)

//Write a program that reassigns a value to a variable declared with let and prints the new value to the console.

age = 23

console.log("And the New age is " + age)

// //Write a program that tries to reassign a value to a variable declared with const and prints the message to the console

// g = 10.0


//Write a program to declare a const, let, var variable within an if statement and try to access the variable outside the if block, what is the result?

if(true){
    //using const 
    const a = 1

    //declartion using let
    let b = 2

    //declartion using var
    var c = 3
}

// console.log(a)  //ReferenceError: a is not defined
// console.log(b)     //ReferenceError: b is not defined
console.log(c)