# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?

A: Dynamic asset can be changed on the fly and respond differently according to user's request. Static asset behaves the same between user's requests unless the developer change the sorce code.

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?

A: In an href, a relative path doesn't have to include the full path and it's referenced from the current context. Absolute path has domain name included. A document root is a file path where the homepage file exists(eg. myWebsite/index.html, myWebsite is the documene root). An absolute path start with the ducument root but a relative path depends on the current location that it's being used.


## Q: What is the difference between server-side and client-side JS?

A: Server-side Js is executed on the remote server so the user cannot see or play with it. While client-side JS is sent to the user's brower so user can munipulate it.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?

A: `var` is hoisted, it can be used before it's declared, while `const` and `let` cannot. 
    `var` can be redefined, while const and `let`  cannot.
    `var` is global variable, while `const` and `let`  can only be used in code blocks.
    `var` and `let`  do not need to be assigned with value when declared, but we must assign a value when declare a `const`.
    
        


## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)

A: 
`Constructor Function inheritance`: 
Set the successor prototype to include a parent object to be inherited;
`Object.create inheritance`: 
Set the new object's prototype to the object that `Object.create()` returns;
`ES6 classes inheritance`: 
Use class as blueprint to crate instances that has attributes and functions specified by the class constructor;
`Brute Force Prototype Assisnment inheritance`: 
Set the inheritor's prototype using Object.setProtorypeOf(`inheritor object`, `inherited object`);
    
## Q: Give a short code demonstration of 1 way to create JS inheritance to __inherit__ a method named "purr".

const cat = {
    purr: function(){
    console.log("...purring");
    }
 };
const Jimmy = Object.create(cat);
Jimmy.purr();




## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".

const Snake = function(name){
    this.name = name;
    };
    Snake.prototype.hiss = function( ){
    console.log("hissing");
    };
    const cobra = new Snake("cobra");
    cobra.hiss();





## Q: Explain what a callback is, and give an example.
A: Callback is to pass a function into another function in order to accomplish better collaboration with less effort.
e.g. 
const sayHello = function(student){
    console.log("Hello I am  student.name!");
}
const student = {
    name: IronMan
}
const greeting = function(person, sayHello){
    sayHello(person);
}
call greeting will trigger sayHello -> greeting(student, sayHello);
## Q: What are the words that would correctly fill in the space in this sentence:

"If a function using `this` is used `_______`, then `this` will not have the expected implicit value"

A: As a  callback.

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

A: It means do not name the classes by how it looks, but what it is. Because it's hard to find the class if you want to apply changes to that class.  

Bad example: 
    <p class = "red"> this is a bad example </p>
    Say if I need to change this paragraph to blue, then green. It's hard to remember which class to change and it's easy to mess it up.

Good example:
    <p class = "header">this is a good example</p>
    this is much better than the bad one because this is easier to modify using CSS and difficult to mess up.
    
    
    
