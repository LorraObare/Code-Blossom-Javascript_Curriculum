//Arrays

// concat
//It merges one or more arrays and returns the merged array.

const first = [1, 2, 3];
const second = [4, 5, 6];

const merged = first.concat(second);
console.log(merged)

//There is no limit for how many arrays we can concat.

// Join ()

const emotions [ sad, happy, crying];

const joined = emotions.join();
console.log(joined);

//Fill()
const colors = ['red', 'blue', 'green'];
colors.fill("pink");
console.log(colors);

// includes()


//Stacks
-A Stack is a collection of values from which you can only add or remove a value from the top. It is like a stack of plates.
-This process of adding or removing a value from the top is called LIFO (Last in- First Out)
-It is important to note that the implementation of Stacks is also made with Array and its built in functions, so we do not use a new keyword for this at this moment.

  //Simulation of a stack of plates.
  // Initial state of the stack
let plateStack = ["Plate1", "Plate2", "Plate3"];

// New plate is added to the stack
plateStack.push("Plate4");
console.log(plateStack); // "Plate1", "Plate2", "Plate3", "Plate4"

// Plate on top from Stack is removed
let outFromStack = plateStack.pop();
console.log(outFromStack); // "Plate4"
console.log(plateStack); // "Plate1", "Plate2", "Plate3"

//The array functions push () and pop () are used to add or remove from the stack respectively.
//But when should you stack? Use it in cases where you need to manipulate data in the reverse order in which they arrived. Meaning the last value to arive to the stack, will be the first one to be mani

//Queues
//A queue is a collection of values to which you add new values to the back of the queue and remove them from the front, just like in a line at the supermarket. This process of adding a value to the back and removing them from the front is called FIFO (First in first out)
//Simulation of a queue 
let checkoutQueue = ["Sarah", "Mike", "Ana"];

//New person come to the queue
checkoutQueue.push("Jim");
console.log(checkoutQueue); 

//first person in queue leaves
let outFromQueue = checkoutQueue.shift ();
console.log(outFromQueue); // Sarah
console.log(checkoutQueue); // Mike, Ana, Jim

//Use the Array functions push() and shift() to add or remove from the queue respectively.

//Objects
-An object is a colection of the so-called key value pairs, just like in a dictionary, where a word is the key and its definition is the value.
  //For example, we could list a person with some key- value pairs:
  let person = {
  name: "Sarah",
  age: 30,
  occupation: "Software Engineer"
};

//To read the attributes of this person(object) you can simply type the key:

console.log(person.name); //Sarah
Technically, you could also represnt that person as an array. But an object is easier to use , because as opposed to the array, you do not need to knoe the exact index.So choose wisely which data structure is best for your data.
  Also note that a value in an object can be another object, like:

let person ={
  name :"Sarah",
  age: 30,
  occupation: "Software Engineer", address: {
    street: "5th Avenue",
    number:150
  }
};
console.log(person.address.street);


