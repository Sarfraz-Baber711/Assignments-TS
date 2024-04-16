// 1. Hello Variable
// Assign "Hello, World!" to this variable and print it.
let greeting = "Hello, World!";
console.log(greeting);

//2. Basic Math
// Assign integer values and perform arithmetic operations.

// Addition
let num1 = 20;
let num2 = 40;
console.log(num1 + num2);

// Subtraction
console.log(num2 - num1);
console.log(num1 - num2);
// Multiplication
console.log(num1 * num2);
console.log(num1 * num1);
// Division
console.log(num1 / num2);
console.log(num2 / num2);
// 3. Swapping Values
//Instructions: Swap the values of two variables without using a third variable.

let a = 2;
let b = 5;
console.log("a", a);
console.log("b", b);

[a, b] = [b, a]; //a=4 & b=2
console.log("a", a);
console.log("b", b);

// 4. Type Annotation (TypeScript)
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.

let a1: string = "Hello";
// let a1 = 2; error

// 5. Modulus Operator
//Instructions: Use the modulus operator to find the remainder of two numbers
console.log(num1 % num2);
console.log(a % b);
console.log(num2 % num2);
console.log(num2 % num1);

// 6. Increment Challenge
//Instructions: Increment a variable's value by 1 using two different methods

num1++;
num2++;
console.log(num1 + num2);
num1 += 10;
num2 += 20;
console.log(num1 + num2);
num1 -= 10;
num2 -= 20;
console.log(num1 + num2);

// 7. Logical Gates
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.

let b1 = true;
let b2 = false;
let b3 = true;
let Logic = b1 && b2;
let logic1 = b1 && b3;
console.log(Logic);
console.log(logic1);
let OR = b1 || b2;
let OR1 = b1 || b3;
let OR3 = b2 || b2;
console.log(OR);
console.log(OR1);
console.log(OR3);
let not1 = !(b1 || b3);
let not3 = !(b2 || b2);
console.log(not1);
console.log(not3);

//8. Compound Assignment
// Instructions: Show examples of using compound assignment operators.

/*alreday done above*/

//9. Even or Odd
// Instructions: Write a program to check if a number is even or odd.

function checkevenodd(number: number): string {
  if (number % 2 === 0) {
    return "even";
  } else return "odd";
}
let n1 = 0;
let n2 = 7;
console.log(checkevenodd(n1));
console.log(checkevenodd(n2));

// 10. Voting Eligibility
// Instructions: Check if a person is eligible to vote.

let age = 5;
let age1 = 25;
let age3 = 18;
if (age >= 18) {
  console.log("You are elegible for Vote casting");
} else {
  console.log("You are not elegible");
}
if (age1 >= 18) {
  console.log("You are elegible for Vote casting");
} else {
  console.log("You are not elegible");
}

// 11. Grading System
// Instructions: Assign a grade based on a numerical score.

let score = 100;
let score1 = 80;
let score2 = 70;
let score3 = 49;
if (score >= 85) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 65) {
  console.log("Grade C");
} else if (score >= 50) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

if (score3 >= 85) {
  console.log("Grade A");
} else if (score3 >= 75) {
  console.log("Grade B");
} else if (score3 >= 65) {
  console.log("Grade C");
} else if (score3 >= 50) {
  console.log("Grade D");
  [];
} else {
  console.log("Fail");
}

//12. Max of Three
//Instructions: Find the maximum of three numbers.

if (score > score1)
  if (score > score2)
    if (score > score3) {
      console.log(score, "score has grestest value among the them");
    } else {
      console.log(score, "score has not greatest value");
    }

//13. Leap Year Checker
//Instructions: Check if a given year is a leap year.

let year = 366;
if (year > 365) {
  console.log("Year is Leap Year");
} else {
  console.log("Year is not leap year");
}

// 14. Fahrenheit to Celsius Converter
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius

let Fahrenheit = 40;
Fahrenheit = (Fahrenheit - 32) * (5 / 9);
console.log(Fahrenheit, "Temperature in Celcius");

//15. Positive, Negative, or Zero
// Instructions: Check if a number is positive, negative, or zero.

let number1 = -10;

if (number1 === 0) {
  console.log("Number is Zero");
} else if (number1 >= 1) {
  console.log("Number is positive value");
} else number1 < 0;
{
  console.log("Number has negative Value");
}

// 16. Multiplication Table
// Instructions: Write a program that prints the multiplication table of a given number up to 10

let s = 2;
console.log(s*1);
console.log(s*2);
console.log(s*3);
console.log(s*4);
console.log(s*5);
