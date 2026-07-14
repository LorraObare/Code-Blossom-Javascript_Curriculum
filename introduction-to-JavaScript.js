/*An algorithm is just a generic set of intsructions , not written for any specific programming language.

-A Program has code that is syntactically valid according to the rules of a specific programming language.
-JavaScript is an interpreted programming language used to code the interactivity on web pages or web applications as Frontedn Development.

Execution type → how does the program run?

Execution Type	How it works	Examples
1.Compiled	Entire code is translated to machine code (bits) before running.	C, C++, Rust, Go
2.Interpreted	Code is read and executed (interpreted) line by line, not compiled/translated before.	JavaScript, Python, Ruby
3.Hybrid	Code is first compiled to bytecode, then interpreted or JIT(just-in-time)-compiled at runtime	Java, C#, Kotlin

Frontend vs Backend → where does the program run?

Part	Runs on	Used for	Examples
Frontend	User’s browser or device	What the user sees and interacts with	HTML, CSS, JavaScript
Backend	Server (remote machine)	Logic, data, storage, authentication	Java, Python, C#, PHP, Node.js, Go

-An example of an interpreter program is a web browser. Thats the frontend side where JavaScripr runs. So whenever a program in JavaScript needs some heavy logic or access to a resource in the backedn, like a database, it might make a call to amothet program runnign on the backedn side. These tow develoment parts together can represent a Client-Server Architecture.

Client Server Architecture
-Client-side (Frontend) : Controls what you see in the browser and handles user's interactivity. Also requests services and data from the server- side.
-Server-side (Backend) : Responds to requests from client-side by also accessing other services or resources, like database.

-A function is like a command or block of commands to perform a small task, as in our rice recipe. Note: A string (text) is always represented within quotation marks("")
-As we know, JavaScript cannot function on its own in a web browser. It needs to be embedded in a web page, written in a markup language called HTML.*/

/*Exercise: Hello, World! in the console*/

console.log("Hello World");

/*Excercise : Hello, World! in the web browser.

Adapt the HTML code above so that it also prints the text "Hello World!" in the console and save it in a file with the name helloworld.html . When you open the file using a browser, it should print the text in the console. Pay attention that in this case you are not pasting the code directly in the console. (Exercise done in the relevant file)

Variables and primitive values.
-In JavaScript we can create variables using the following syntaxes.

1. var : Introduced in older versions of JavaScript, var can be global or function-scoped. When function- scoped, it can be accessed from the entire function where it is declared, not respecting any inner blocks.

2. let and const : Introduced in ES6 (2015), let and const are block-scoped, meaning they can only be accessed within the block they are declared in. The difference between them is that let allows reassignment of values, while const does not allow reassignment after the initial assignment.

-Use const for values that should not change, and let for values that can change.
-Use const by default, and only use let when you know the value will change.

-There are 7 data types in JavaScript.

1.Boolean : true or false  */

var data = true;

if (data) {
    console.log("The data is true");
} else {
        console.log("The data is false");
    }

// 2. null - This just means no value
var n = null
console.log(n*32); // returns 0 because null is treated as 0 in numeric operations


//3. undefined - This means a variable has been declared but has not yet been assigned a value.

var u;
console.log(u); // returns undefined

// 4. Number - This is a numeric value, which can be an integer or a floating-point number.
 
var num = 42;
console.log(num); // returns 42

// 5. String - This is a sequence of characters, used to represent text. Strings are enclosed in single or double quotes.

var name = "Hello, World!";
console.log(name); // returns "Hello, World!"

// 6. Symbol - This is a unique and immutable primitive value, often used as an identifier for object properties.

var sym = Symbol('unique');
console.log(sym); // returns Symbol(unique)

// 7. object - This is a collection of properties, where each property is a key-value pair. Objects can be used to store more complex data structures.

var myCar= new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar); // returns { make: 'Ford', model: 'Mustang', year: 1969 }