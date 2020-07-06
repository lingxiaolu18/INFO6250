# Exam 2 Questions

-   Answers should be roughly 2-5 sentences, and in your own words.  
-   Some questions ask for a code sample - keep them short and to the point.
-   Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
-   I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q1: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Give an example where a url DOES not represent a resource, then describe how to modify it so that it does.

It means the URL is aiming at providing resources that needed to update a page, and it could have many different endpoints. <https://leetcode.com/> does not represent a resource. But <https://leetcode.com/problems/network-delay-time/> represent a specific resource.

## Q2: If the service returns the username as a plain text string, what is wrong with the below and what would fix it? (Assume the service works without error)

      const username = fetch('/username');
      console.log(`user is named ${username}`);

A fetch returns a promise so username reference a promise that fetch returns. We can write `const username = fetch('/username').then((res)=> return res;)` to get the text string returned from the service call.

## Q3: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

"Store state in the DOM" means store data in DOM, which is not recommended. The DOM should be a view model of data, it is used to update the view whenever input data changes, but not store data itself because it'll make update become more difficult.

## Q4: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

In my understanding, a multiple-page-web application is an application with multiple HTML files. It has an entry point(entry html) and whenever users request something different it'll direct them to other pages(HTML) with a full-page reload.
On the other hand, a SPA has only one HTML file and whenever users request some change a SPA will call restful services and use data returned from restful APIs to update the page using DOM without full-page reload.

## Q5: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?

"PE" means delivering as much as possible features to users with most powerful browser while providing base essential content to users without a browser that is capable of running all required code. SPA that uses PE provides limited user experience for users with older browser. While people with older browser may not be able to surf a SPA without PE since it's designed for people with new browser editions.

## Q6: Explain how a REST service is or is not similar to a dynamic asset.

REST stands for Representational State Transfer. To me it is an architectural style providing service standards for interactions between server and client. In REST architecture, client makes request to get or modify resources on the server, then server send back responses. It's similar to a dynamic asset in the sense of request-response pattern, but the difference is how the pattern is used. Dynamic asset model generate HTML fragments and sent to the client, while REST service only send back data that's not ready for displaying and should be re-processing by client side JS.

## Q7: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

User password should not be stored in a cookie. Because if someone other than the account holder has access to the cookie, they may stole the password.

## Q8: Explain why it is useful to separate a function that fetches data from what you do with that data

Separation of concerns is the best practice since it decouples the code as much as possible. It's much easier to debug when something went wrong. It's also makes the code more readable.

## Q9: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)

Try/catch is useless when dealing with asynchronous errors because error is thrown in callback function which is not in the same execution time as the catch block. The catch block would never catch the error. To fix, one needs to use async/await function or promise chain.

## Q10: Is separation of concerns a front end issue, a server-side issue, or both?  Describe an example the demonstrates your answer.

Both front and back end should employ separation of concerns.
For example, if one needs to make a web calculator to perform plus operation.
pseudocode:

Back end:
`const calculate = function(a, b){
  return a + b;
  }

  app.post('/result', (req, res)=>{
    const a = req.body.first;
    const b = req.body.second;
    const c = calculate(a, b);
    res.send(JSON.stringify({c}));
    });

`
Front end:

`const getUserInput = function(){
  //code here...
}
const updateUI = function(){
  //code here...
}
const callServiceApi = function(){
  return fetch('/result',
  method: 'POST',
  headers: new Headers({
    'content-type':'application/json'
    }),
    body: JSON.stringify({getUserInput()});
)}

const performWork = function(){
  callServiceApi()
  .then(req=>{
    updateUI();
    });
}

document.querySelector(button).addEventListener('click', e=>{
  performWork();
  });
`
