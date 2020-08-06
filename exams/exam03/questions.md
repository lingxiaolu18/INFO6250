# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q1: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)
Consolidate duplicate code. Do separation of concerns.
## Q2: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?
Progressive enhancement supports compatibility. If using SPA alone, some people may not have access to all features.
## Q3: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain.  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and the page makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  hint: This should list and describe multiple request/response steps, and be clear where the request is coming from and where the response is received.
First the request is sent to the dev server. Once it discovers the dev server doesn't has './service' service, it send the request to the proxy. And the proxy on port 4000 received the request and response.
## Q4: Follow-up: Using the above scenario, list and describe what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`
After running `npm run build`, proxy has nothing to do with production code, all requests are directly sent to port 4000.
## Q5: I have said that you can only pass data "down" in React, not "up".  What does that mean?  Give simple code sample if that makes it easier to describe.
State can only be passed from parent to child, not the other way around. If a state needs to be changed according to a child's behavior, we can only pass the state to that child.
## Q6: Follow-up: If you can't pass data "up" the component tree, how can anything that is "down" change data?  Give simple code samples if that makes it easier to describe.
Like I said in the last question, parent pass a state setter down to it's child(or grand child whatsoever), when some behavior happens, state setter is triggered and parent state is changed.
## Q7: Imagine you have a collection of student records, with each having a student id, a name, and an address. (an example of one item in the collection would be: { id: "654321", name: "Bao", address: "123 Main Street" })  Imagine you also have collection of steps to create a pizza, with each step having an ingredient, a quantity, and an instruction. (an example of one item in the collection would be the object { qty: "1 cup", ingredient: "shredded cheese", instructions: "sprinkle over pizza" })
Give a code sample where each collection is shown with at least one more element (2+ students for the first collection, 2+ pizza-making steps).  Make sure you make proper use of arrays and objects.  Explain why you've chosen each way of making a collection (e.g. Why you use an array for one or both, or why you use an object for one or both)
```
const studentRecords = {};
const studentOne = { id: "654321", name: "Bao", address: "123 Main Street" };
const studentTwo = {id: "123456", name: "Tony", address: "456 Monor Ave"};
studentRecords[studentOne.id] = studentOne;
studentRecords[studentTwo.id] = studentTwo;

const recipes = [];
const recipeOne = { qty: "1 cup", ingredient: "shredded cheese", instructions: "sprinkle over pizza" };
const recipeTwo = { qty: "1 cup", ingredient: "milk", instructions: "put milk in microwave oven" };
recipes.push(recipeOne);
recipes.push(recipeTwo);
```
Use an object for student records, with each key corresponding to a student's id. It's easier if we want to look up a student's information if we have the student's id without looping through the whole record.
Use an array for recipes bacause we don't have a proper key if we use an object. And array also supports Arrays.map() which is easier to use.
## Q8: How does inheritance in JS relate to a prototype?  Give a simple code sample if it helps explain.
Each object has a 'prototype' object that stores a link to another object. The 'prototype' object also has a prototype. This inheritance chain keeps expanding until it reached a prototype that has `null` as it's prototype.
## Q9: What is wrong about this code sample? `if( !username || username == undefined) { ` be sure to explain why that is wrong.
It's wrong because the second part is redundant. `!username` is evaluated to falsy under 6 circumstances: `undefined || null || NaN, 0 || "" || false`. As we can see, checking for `username == undefined` is not necessary as it has
already been tested in the first part.
## Q10: In your own words, what is decoupling?  What is an example of decoupling in a React app?  Why is this beneficial?
Decoupling means the components of code are highly independent and each of them is responsible for a specific functionality. For example if we want to build a todo list app, we want to separate the components as much as possible.
This is beneficial because it makes our code easier to maintain and less error-prone.   
