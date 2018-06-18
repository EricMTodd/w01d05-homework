console.log("JavaScript is running...");

// 1. Variables are assigned with by using let followed by the desired variable name. Using the = operator, you can assign the variable a value.
// 2. The value of a variable can be changed in many ways. By using formulas, functions, loops and more to alter the current state of the variable. Most notably by omitting the "let" attribute used to create the variable first.
// 3. oldVariableName = "enter_subject_string_here" --> newVariableName = oldVariableName.

// Strings
let firstVariable = "Hello world!";
firstVariable = 42;

let secondVariable = firstVariable;
secondVariable = "Hello world!";

// The value of firstVariable is 42.

let myName = "Eric Todd";
console.log("Hello, my name is " + myName);
console.log(`Hello, my name is ${myName}`);


// Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

let name = e;

console.log(a < b);
console.log(c > d);
console.log(name == name);
console.log(a * a === d);
console.log(e === "Kevin");
console.log(48 !== "48");


// The Farm
let animal = "Jormungandr";
if (animal === "cow") {
	console.log("mooooo")
} else {
	console.log("Hey! You're not a cow!")
};


// Driver's Ed
let age = 17;
if (age >= 16) {
	console.log("Here are the keys!")
} else {
	console.log("Sorry, you're too young.")
};


// Just loop it
for (i = 0; i <= 10; i++) {
	console.log(i)
};

for (i = 10; i <= 4000; i++) {
	console.log(i)
};

for (i = 10; i <= 4000; i+= 2) {
	console.log(i)
};


// Let's get even
for (i = 2; i <= 100; i += 2) {
	console.log(`${i} is an even number`)
};


// Give me Five
for (i = 0; i <= 100; i++) {
	if (i % 5 === 0) {
		console.log(`Hey, I found a ${i}! High five!`)
	} else {
		console.log(i)
	}
};

// Savings account
let bankAccount = 0;
for (i = 1; i <= 10; i++) {
	bankAccount += i;
};

console.log(bankAccount);


let bankAccount2 = 0;
for (i = 1; i <= 100; i++) {
	bankAccount2 += i * 2;
};

console.log(bankAccount2);


// Multiples of 3 and 5
let multi = 0;
for (i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		multi += i;
	}
};

console.log(multi);


// Easy does it
const quotes = ["Veni vidi vici", "We are what we repeatedly do. Excellence therefore, is not an act but a habit.", "The true strength of a warrior, is the strength of the men that stand beside him."];

// Random
const randomThings = [1, 10, "Hello", true];

// randomThings[0] = value

randomThings[2] = "World";

console.log(randomThings[2]);


// We've got class
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

// ourClass[2] = value;

ourClass[2] = "octocat";

ourClass.push("Cloud City");

console.log(ourClass);


// Mix it up
const myArray = [5, 10, 500, 20];

myArray.push("Egon");

myArray.pop();

myArray.unshift("Bob Marley");

myArray.shift();

myArray.reverse();

console.log(myArray);


// Biggie Smalls
biggieSmalls = 42;
if (biggieSmalls < 100) {
	console.log("Little number")
} else {
	alert("BIG number")
};

// Monkey in the middle
middleMonkey = 6;
if (middleMonkey < 5) {
	console.log("Little number")
} else if (middleMonkey > 10) {
	console.log("BIG number")
} else {
	console.log("monkey")
};


// What's in your closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log(`Kristyn is rockin' that ${kristynsCloset[2]} today!`);

let kristynShoe = "left shoe";
kristynsCloset.shift();
kristynsCloset.splice(5, 0, "raybans");
kristynsCloset.splice(4, 1, "stained kit hat");

console.log(kristynsCloset);


let thomShirt = thomsCloset[0][2];
let thomsPants = thomsCloset[1][0];
let thomsAcc = thomsCloset[2][2];

console.log(`Thom is looking fly in his ${thomShirt}, ${thomsPants}, and some sick ${thomsAcc}!`);

thomsCloset[1][2] = "footie pajamas";

console.log(thomsCloset[1][2]);


// Functions

// Print Greeting
const printGreeting = (name) => {
	return `Hello there, ${name}...`;
};

console.log(printGreeting("Slimer"));


// Reverse word order

const reverseWordOrder = (sentence) => {
	let words = sentence.split(" ").reverse();
	let string = "";
	for (word in words)
		string += (word > 0 ? " " : " ") + words[word];
	return string;
};

console.log(reverseWordOrder("Ishmael me Call"));


const reverseWordOrder2 = (sentence) => {
	let words = sentence.split(" ").reverse();
	let string = "";
	for (word in words)
		string += (word > 0 ? " " : " ") + words[word];
	return string;
};

console.log(reverseWordOrder2("I use Lâncome on my comb"));


// Calculate
let total = 0;
const calculate = (num1, num2, operation) => {
	if (operation === "add"){
		return num1 + num2;
	} else if (operation === "sub") {
		return num1 - num2;
	} else if (operation === "mult") {
		return num1 * num2;
	} else if (operation === "div") {
		return num1 / num2;
	} else if (operation === "exp") {
		return (Math.pow(num1, num2));
	}
};

console.log(calculate(3, 4, "add"));
console.log(calculate(3, 4, "sub"));
console.log(calculate(3, 4, "mult"));
console.log(calculate(3, 4, "div"));
console.log(calculate(3, 4, "exp"));


// 1.
const printCool = (name) => {
	return (`${name}`)
};

console.log(printCool("Captain Reynolds"));


// 2.
const calculateCube = (cube) => {
// 6 * cube^2
	return 6 * Math.pow(cube, 2)
}

console.log(calculateCube(5));


// 3. 
const isVowel = (char) => {
	return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !== -1
};

console.log(isVowel("a"));
console.log(isVowel("x"));
console.log(isVowel("A"));
console.log(isVowel("X"));


// 4.
const getTwoLengths = (str1, str2) => {
	return [str1.length, str2.length];
};

console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5.
const getMultipleLengths = (array) => {
	let sumOfIndex = [];
	for (i = 0; i < array.length; i++)
		sumOfIndex.push(array[i].length);
	return sumOfIndex
};

console.log(getMultipleLengths(["What", "is", "up", "my", "dude"]));


// 6.
const maxOfThree = (num1, num2, num3) => {
	return Math.max(num1, num2, num3)
};

console.log(maxOfThree(107, 42, 96));


// 7.

// 8.
const transmogrify = (num1, num2, num3) => {
	let total = (num1 * num2);
	return Math.pow(total, num3)
};

console.log(transmogrify(5, 3, 2));


// Objects

// Syntax


// Me
const me = {
	name: "Eric Todd",
	age: 24,
	email: "eterictodd@gmail.com"
};

me.age = 1000;

console.log(me.age);

me["place of residence"] = "Glendale";

console.log(me["place of residence"]);


// Slimer
const monster = {
	name: "Slimer",
	color: "greenish",
	type: "plasm or ghost or something"
};

console.log(monster.name);

monster.type = "creature";

monster.age = 6;

console.log(monster);


// Ogres



































