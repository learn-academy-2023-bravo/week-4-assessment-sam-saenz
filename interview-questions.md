# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object- oriented programming is a type of programming that heavily utilizes objects and their traits to write code and solve problems. In OOP, most data that a coder will work with is objects, which allows for very modular code. This means that they can take and reuse code many times, such as in the case of inheritance and importing methods to multiple objects. Functional programming relies more on defining functions around a set form of data that you know you'll be working with, and defining how that data is used. OOP allows you to always add more instances of data, where you have already defined what different instances might look like.

Researched answer: In functional programming, the storage of data in objects is not possible, and instead you must use functions to transform data in whatever way you desire. In OOP, the ability to store data in objects means that its best used when the operations that youll be making on the data is consistent and not constantly changing, and the addition of new objects will be the primary changing factor.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: Floats and integers are both numeric objects in Ruby. They are both used to represent numbers, but integers are used in the case of whole numbers booth positive and negative. Floats on the other hand are representative of numbers with decimal values, though they can also store whole numbers. Math can be performed using both types of numeric values at the same time, and the result is regardles cast to be a float.

Researched answer: Because floats hold decimals and integers do not, there are specific use for both that allow for interesting coding tricks. For example, dividing two ints that do not divide evenly do the opposite of a modulo, returning only the whole number of times a number can be divided without the remainder. This also means that for an accurate mathematical answer, you will most likely want to be using floats for intricate calculations.

1. Ruby has an implicit return. What does that mean?

Your answer: This means that in any statement that expects a return, the data that is returned will always be the last statement made by default. For example, if a method ends in an if/else statement, the last line in either return block will be the data that the method returns, unless it is otherwise explicitly stated.

Researched answer: Implicit return makes Ruby blocks return the value of the last line if no return is present, so it can be used to cut down on visible clutter by excluding return statements where possible. This is most useful in smaller, easily understandable methods,  but can get confusing if used poorly in larger, more complex logic. Because of this, it is always good to have well-documented code to ensure other coders and yourself can understand what a given block does.

1. What is a block in Ruby?

Your answer: A ruby block is a chunk of code that executes when called by its corresponding function. For example a block called my_code will be executed by my_code(). Blocks are the basic form of storing logic in Ruby.

Researched answer: A block is essentially the same thing as a method in Ruby, except that where a method will always belong to a specific object, blocks are just generic code that can be invoked without being attatched to an object. they are similar to functions from other coding languages.

1. How do you extract a value in a Ruby hash?

Your answer: To extract a value from a Ruby hash, you must use the bracket notation along with the key associated with the desired value. This can be done to extract the value for logic, or for something like printing to the console.

Researched answer: You can also use other methods like delete to moodify or remove values from a Ruby hash, and values can also be updated after referencing them.

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a tool used to test Ruby code, similar to Jest for js.

2. Test-driven development: TDD involves using many test cases to practically evaluate code to see if it is ready for production.

3. PostgreSQL: This is a database management tool to be used with SQL databases, and acts a a way to store data for applications.

4. CRUD: CRUD is Create Read Update Delete, and these are the basic functions of any code application.

5. HTTP: HTTP is Hypertext Transfer Protocol, and is the way by which web data such as HTML is communicated over the internet.
