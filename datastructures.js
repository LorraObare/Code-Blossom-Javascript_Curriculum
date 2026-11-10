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


//Tree Traversal:
//Inorder, Preorder, Postorder, and AMP and Level order.
//What is tree traversal?
//-Tree traversal is the process of visiting every node in a tree exactly once ina defined order. There are two families: depth-first traversal (preorder, inorder and postorder), which dives one branch before backtracking, and breadth-first or level order traversal, which visits nodes level by level. Every traversal runs in O(n) time because it touches each node once.
//Unlike an array, a tree has nosingle obvious order to walk it, so we define several.

//Key Takeaways.
//Depth-first traversals differ only in when the node is visited : preorder = Root, Left, Right; 
//inorder = Left, Root; Right;
//postorder = Left, Right, Root.

//inorder traversal of a binary search tree returns the keys in ascending sorted order.
//postorder is used for deleting or freeing a tree and for evaluating expression trees bottom-up.
//level order traversal (BFS) visists nodes level by level using a FIFO queue.
//Recursive DFS uses the call stack; the iterative versions use an explicit stack, while BFS uses a queue.
//All four traversals run in O(n) time; space is O(h) for DFS and O(w) for BFS.


//Example of the code in JavaScript
//A single node in a inary tree

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;

    }
}

// Build the example tree:
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

//Depth Firts vs Breadth First Traversal
//There are two ways to systematically visit every node.Depth first search (DFS) follows one branch all the way to a leaf before backing up and trying the next branch.
//Breadth first search (BFS), also called level order traversal, fans out one level at a time. DFS natururally uses a stack (the call stack when recursive, or an excplicit stack when iterative);
//BFS uses a FIFO queue. The three classic depth-first orders - first orders - preorders, inorder an dpostorder - are all DFS; they differ only in the moment the current node is recorded.

//preorder traversal (Root, Left, Right)
// Recursive preorder: Root, Left, Right
function preorderRecursive(node, result = []) {
  if (node === null) return result;
  result.push(node.value);            // visit the node first
  preorderRecursive(node.left, result);  // then the left subtree
  preorderRecursive(node.right, result); // then the right subtree
  return result;
}

console.log(preorderRecursive(root)); // [1, 2, 4, 5, 3, 6, 7]

// Iterative preorder with an explicit stack
function preorderIterative(root) {
  if (root === null) return [];
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.value);              // visit the node
    // push right first so left is processed first
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}

console.log(preorderIterative(root)); // [1, 2, 4, 5, 3, 6, 7]

//Inorder Traversal (Left, root, right)
// Recursive inorder: Left, Root, Right
function inorderRecursive(node, result = []) {
  if (node === null) return result;
  inorderRecursive(node.left, result);   // left subtree first
  result.push(node.value);             // then visit the node
  inorderRecursive(node.right, result);  // then the right subtree
  return result;
}

console.log(inorderRecursive(root)); // [4, 2, 5, 1, 6, 3, 7]

//The iterative version walks as far left as possible while pushing every node onto the stack, then pops a node to visit it and moves to that node's right child. This faithfully reproduces Left, Root, Right without recursion.
// Iterative inorder with an explicit stack
function inorderIterative(root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // go as far left as possible, stacking nodes on the way
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();   // leftmost unvisited node
    result.push(current.value); // visit it
    current = current.right; // then move into its right subtree
  }
  return result;
}

console.log(inorderIterative(root)); // [4, 2, 5, 1, 6, 3, 7]

//Postorder Traversal(Left, right , root)
// Recursive postorder: Left, Right, Root
function postorderRecursive(node, result = []) {
  if (node === null) return result;
  postorderRecursive(node.left, result);  // left subtree
  postorderRecursive(node.right, result); // right subtree
  result.push(node.value);              // visit the node last
  return result;
}

console.log(postorderRecursive(root)); // [4, 5, 2, 6, 7, 3, 1]

//Level Order Traversal
//Level order traversal is breadth-first search applied to a tree. Instead of diving down a branch, it visits all nodes at depth 0, then all nodes at depth 1, and so on, left to right within each level. On the example tree the order is 1, 2, 3, 4, 5, 6, 7. The trick is a FIFO queue: dequeue a node, visit it, then enqueue its children. Because the children of earlier nodes are enqueued before the children of later nodes, the queue naturally serves nodes level by level.
// Level order traversal (BFS) with a queue
function levelOrder(root) {
  if (root === null) return [];
  const result = [];
  const queue = [root]; // FIFO queue

  while (queue.length > 0) {
    const node = queue.shift();   // dequeue from the front
    result.push(node.value);      // visit the node
    if (node.left) queue.push(node.left);   // enqueue children
    if (node.right) queue.push(node.right);
  }
  return result;
}

console.log(levelOrder(root)); // [1, 2, 3, 4, 5, 6, 7]

// Level order grouped by level: returns [[1], [2, 3], [4, 5, 6, 7]]
function levelOrderGrouped(root) {
  if (root === null) return [];
  const levels = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length; // nodes currently on this level
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levels.push(currentLevel);
  }
  return levels;
}

console.log(levelOrderGrouped(root)); // [[1], [2, 3], [4, 5, 6, 7]]

//When to Use Each Traversal
Choosing a traversal comes down to when you need to act on a node relative to its children. Reach for inorder when the tree is a binary search tree and you want its values in sorted order, for range queries, or for tree sort. Reach for preorder when you need to process a parent before its children: copying a tree, serializing it to disk, or producing prefix notation. Reach for postorder when you must finish the children first: deleting or freeing memory, evaluating an expression tree, or computing subtree height and size. Reach for level order when distance from the root matters: finding the shortest path in an unweighted tree, printing a tree level by level, or solving the many BFS interview problems such as right-side view and zigzag traversal.


//  Geeks for Geeks content
// Tree traversal is reading/ processing the data of a node exactly once in some order in a tree.
//Traversing is  categorized into two ways.
// 1. Breadth First Traversal (level order)
// 2. Depth First Traversal 
  
//Depth first has further catgories
//-Preorder Traversal
//-Inorder Traversal  
//- Postorder Traversal  

//Breadth First Traversal also called level order traversal
// This is traversing a tree node in a level by level fashion.

//The names rely on where the "Root" happens
// The trick is to look at where the root is processed relative to the lfet and right subtrees.

//Pre- order (Root-Left-Right)
//You visit the root first, before diving into the children(Great for copying or cloning a tree)

  
//In-order (Left-Root-Right)  
//You go all the way left, process the root in the middle, then go right (gives you soretd order if it's Binary search tree)

//Post-order(left-Right-Root)
//You process both children first and save the root for last(great for deleting a tree or calculating folder sizes safely)

//In programming, data is often oragnized in a hierachy (like a family tree or folder system) rather than a straight line.
//Traversing a tree simply means visiting every single room (node) in that house exactly once to check it or do something there.

//In a straight list (like an array) you just walk forward, whereas in a tree you hit a fork in the road at every step. You cant just move forward; you have to choose a path, follow it to the end, and then remember to turn around and check the paths you skipped.


//Visiting vs processing a node
//Think of a tree traversal like a delivery truck delivering packages to houses in a cul-de-sac

//Visiting a node- This is the act of pulling up to the driveway. The driver might drive past House A to get to House B at the very end of the street. They visited House A's physical location because they had to pass it, but they didn't do anything there yet.

//Processing a node - This is the moment the driver actually steps out of the truck rings the doorbell, and hands over the package(eg printing the value, adding a number, deleting the data)
//Depending on the rule, the driver will choose to hand over the packages either the first time they see a house, when they are halfway through the street, or only on their way back out of the neighbouhood.

//REAL WORLD Examples
//File Explorers (Calculating Folder Sizes) - Post Order Traversal
  //-When your computer calculates how much space a folder takes up, it uses a Post-order traversal.(Left-Right-Parent)
  //Application- The computer travels all the way down to the deepest sub-files, sums them up and passes that total back up to the parent folder.

  //Web Browsers (Rendering a webpage )- Pre - order Traversal
  //Websites are built using HTML, which is a maasive tree structure (the DOM) 
  //The browser needs to read and build the outer layout before it can paint the text and images inside it.
  //Application - It uses a pre-order traversal(Parent- left- right). It creates the parent container first, then dives inside to process the children.

  //Video game matchmaking or leaderboards
  //Games often store player ranks or high scores in a "Binary search tree" to keep things organized.
  //Why? If you want to print out a leaderboard from the absolute lowest score to the highest score, you cant just read it top-down.
  //Application- An In-order traversal (left-parent-right) automatically extracts the data in perfect, sorted alphabetical or numeric order.


  //Undo/redo & Add to cart systems - Level Order Traversal
  //Sometimes you dont want tp go deep down one path; you want to look at everything layer by layer. If you are analyzing user behaviour or streaming data, you might explore everything happening right now before looking at what happens next.
  //Application: This is a level-order traversal (checking everyone on floor 1, then everyone on floor 2)
  
  
  
  
  

