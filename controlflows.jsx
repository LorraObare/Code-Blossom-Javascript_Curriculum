//Introduction to Conditionals
//In the following pseudocode, we see that an instruction or a block of instructions might be executed accoriding to states, it means decisions in the code can be made based on conditions, which could even be a chain of conditions.

IF rice is too hard THEN
   ADD more water and cook for more 2 minutes
ELSE
   GET pot from the stove (it means rice is ready)
END IF

//In this context, if and Else statements fulfill this work very well. In JavaScript, we could write the above pseudocode like this:
 if (isRiceHard) {
     addWater(); cook(2);
 } else {
   getPot();
 }

//Switch Statement
//Another way to control the flow of your program is using a switch, where you give the possible case conditions for an expression.
//It can be an efficient replacement to many else if statements.

//Example
switch (day) {
  case "Mon":
    console.log("Start of week");
    break;
  case "Fri":
    console.log("End of the work week");
    break;
  default:
    console.log("Midweek");}
// In this case, we have 2 possible case conditions and a default case for the varible "day".

let testScore = 92;
let letterGrade;

 switch(true){
   case testScore >=90:
     letterGrade = "A";
     break;
   case testScore >=80:
     letterGrade = "B";
     break;
   case testScore >=70:
     letterGrade = "C";
     break;
   case testScore >=60
     letterGrade ="D";
     break;
   default:
     letterGrade = "F";
 }

     console.log(letterGrade);


//Introduction to Loops
//In coding, it is quite common to have instructions that need to be continuously repeated either for a specific amount of times or until a certain condition is fulfilled. We know such loops from our daily lives as well, foe example, when hanging up our clean laundry to dry: It isnt one single action. We need to take one garment and hang it up. Then we take the next one, hang it up, and so on and so forth, until all garmenst are hung and the laundry basket is empty (hence, the condition is fulfilled). In coding, we have two ways to perform such loops: while - loop
// or for-loop.

