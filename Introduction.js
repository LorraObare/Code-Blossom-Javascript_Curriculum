/*Algorithms
An algorithm is a set of instructions for perfomring a programming task.

Exercise 1: Reorganize the algorithm
- Rinse the rice until the water is almost clear.
- Separate 100g of rice.
- Cover the pot with a lid and put it on the stove at a high temperature.
- Cook for 8 minutes.
- Serve the rice.
- Remove the pot from the stove.
- Add 200ml of salted water to the pot so that the rice is covered.
- Add rice to a pot.
- When water starts to boil, decrease the temperature.
- If the rice is too hard, add more water and cook for 2 more minutes.
*/

START
GET 100g rice
WHILE rice not clear DO
 rinse under water
END WHILE
ADD rice to a pot
ADD 200ml of salted water to pot so that the rice is covered
ADD lid to the pot
PUT pot on the stove on high temperature
WHILE water not boiling DO 
  wait
END WHILE
SET low tempertaure
FOR minite = 1  to 8
wait
END FOR
IF rice is too hard THEN
ADD more water
FOR minute = 1 to 2
wait
END FOR
ELSE
remove pot from the stove
END IF
GET rice
END

/* Variables
-Variables are containers in which you store a value. That value can be either static(is it nevere changes) or dynamic (It is changeable)
 For example, this is how we can rewrite the recipe for cooking rice using variables

 */
START
SET rice TO 100
SET saltedWater TO rice * 2
WHILE rice is not clear DO
 rinse under water
END WHILE

ADD rice to a pot
ADD saltedWater to the pot to cover the rice
ADD lid to the pot
PUT pot on the stove
SET stoceFire TO high
WHILE salted water not boiling DO
WAIT

END WHILE
SET stoveFire TO low
FOR minute = 1 to 8
wait

END FOR
IF rice is too hard THEN 
  ADD more water
  FOR minute = 1 to 2
wait 
END FOR
ELSE
 remove pot from the stove 
 END IF 
 GET rice

END
/* In this example, there are three variables: rice, saltedWater, and stoveFire.
-the variable rice is now set to 100 but if you needed to cook more rice, you would change this variable to, for example 200..
As the amount of rice changes, so will the amount of water.
-This will happen automatically, as the variable "water" is set to be 2x the amount of rice. These variables are set at the beginning of the algorithm and never change, so they are static.
-On the other hand, the variable represent numbers and strings( text) but they could also have other types, like a logical boolean (true/false) or an array (list) of other types.

1.2 Programming paradigms
-A programming paradigm is the way a programming language is classified based on its style and features.

In this section, we will look at a high-level introduction to programming paradigms.

Paradigm  |	Short description	Programming language
1.Imperative / Procedural	Programs written as sequences of statements that modify program state step by step. You always explicitly tell the computer what to do.

[Do this] → [Then this] → [Then this] |	C, Pascal, Fortran, Python, JavaScript.



2.Object-Oriented (OOP)	Organizes data and behavior into objects; enables reuse of the code. Usually used to represent real-world entities.
[Car] -> car.drive()
[Person] -> person.getName()	 | Java, C++, Python, Ruby, JavaScript
Functional	Transformation expressed by evaluation of functions, avoiding mutable state and side-effects. You give the transformation as input but do not tell how to use it (it is known by the function).

[Functions] -> map(n => n+n)
                         .filter(n => n % 2 === 0)
                         .collect(n => new Array)	 | Haskell, Lisp, Erlang, F#, JavaScript

                         
3.Logic / Declarative	Specifies what to compute using logical relations rather than step-by-step instructions. You tell facts and which rule to use, then the program knows what to do.
[Facts] -> age(Julia, 15)
                  age(Jim, 19)
[Rule] -> allowedIn(name): age(name) >= 18
[Query] -> allowedIn(Julia)
                   allowedIn(Jim)	 | Prolog, Datalog

                   
4.Concurrent / Parallel	Multiple computations run concurrently, interacting and synchronizing as needed.
[Task 1] -> cookEgg()
[Task 2] -> toastBread()
[When both tasks  are done] -> eatBreakfast()	 | Go, Erlang, Java, Clojure
	Note: Table content paraphrased from Sebesta, R. W. (2021). Concepts of Programming Languages, 12th Edition, Pearson.	



