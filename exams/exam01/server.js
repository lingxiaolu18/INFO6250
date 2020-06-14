const express = require('express');
const bodyParser = require('body-parser');
const CompareResult = require('./compare');
const app = express();
const PORT = 3000;
const game = require('./words');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const userData = {};



let ListString = "";
for(let i = 0; i < game.length; i++){
  if(i % 4 === 0) ListString += "\n";
  ListString += game[i] + "  ";
}


function generateId(){
  return Math.floor(Math.random()*1000 + 1);
}

function generateRandomWord(){
  return game[Math.floor((Math.random()*game.length))];
}

function generatePlayer(id){
  userData[id] = {
    secretWord : generateRandomWord(),
    userGusses : []
  };
}


app.get('/', function(req, res){
  let id = generateId();
  while(userData[id]){
    id = generateId();
  }
  generatePlayer(id);



  res.send(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Word Guess</title>
        <link href="style.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet">
      </head>
      <body>
        <h1 class="header">Welcome to Word Guess!
        <div class="wordList">
        <p class = "list-header">Guess a word from this list:</P>
        <div class ="word-list">${ListString}</div>
        </div>
        <div class="form">
          <form class="input" action="/" method="post">
            <label for="guess">Take your guess:</label>
            <input type="text" name="guess" value="" placeholder="put your guess here">
            <input type="submit" name="guess" value="Submit!" class="submit">
            <input type="hidden" id ="userId" name ="guess" value=${id}>
          </form>
        </div>
      </body>
    </html>
    `);
});


app.post('/', function(req, res){


  let id = req.body.guess[2];
  let input = req.body.guess[0].toUpperCase();
  if(game.includes(input)){
    userData[id].userGusses.push(input);
    let matched = CompareResult(userData[id].secretWord, input);

    if(matched < userData[id].secretWord.length){
      res.send(`
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Word Guess</title>
            <link href="style.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet">
          </head>
          <body>
            <h1 class="header">Welcome to Word Guess!
            <div class="wordList">
            <p class = "list-header">Guess a word from this list:</P>
            <div class ="word-list">${ListString}</div>
            </div>
            <div class="form">
              <form class="input" action="/" method="post">
                <label for="guess">Take your guess:</label>
                <input type="text" name="guess" value="" placeholder="put your guess here">
                <input type="submit" name="guess" value="Submit!" class="submit">
                <input type="hidden" id = "userId" name = "guess" value=${id}>
              </form>
            </div>
            <div class = try>
            <p>You've tried ${userData[id].userGusses.length} times, take your time!</P>
            <p>Your guess matches ${matched} letters</P>
            <p>Your guesses so far: ${userData[id].userGusses}</P>
            </div>
          </body>
        </html>
        `);
    }
    else{
      res.send(`
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Word Guess</title>
            <link href="style.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet">
          </head>
          <body>
            <h1 class="header">Welcome to Word Guess!
            <div class="wordList">
            <p class = "list-header">Guess a word from this list:</P>
            <div class ="word-list">${ListString}</div>
            </div>
            <div class="form">
              <form class="input" action="/" method="post">
                <label for="guess">Take your guess:</label>
                <input type="text" name="guess" value="" placeholder="put your guess here">
                <input type="submit" name="guess" value="Submit!" class="submit">
                <input type="hidden" id = "userId" name = "guess" value=${id}>
              </form>
            </div>
            <div class="success">
            <p>You did it! You took ${userData[id].userGusses.length} guesses to finish!</P>
            <a href="/">Start A New Game</a>
            </div>
          </body>
        </html>
        `);
    }
  }
  else{
    res.send(`
      <!DOCTYPE html>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8">
          <title>Word Guess</title>
          <link href="style.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet">
        </head>
        <body>
          <h1 class="header">Welcome to Word Guess!
          <div class="wordList">
          <p class = "list-header">Guess a word from this list:</P>
          <div class ="word-list">${ListString}</div>
          </div>
          <div class="form">
            <form class="input" action="/" method="post">
              <label for="guess">Take your guess:</label>
              <input type="text" name="guess" value="" placeholder="put your guess here">
              <input type="submit" name="guess" value="Submit!" class="submit">
              <input type="hidden" id = "userId" name = "guess" value=${id}>
            </form>
          </div class="complete">
          <div class="invalid">
          <p>This is a invalid guess, try once more</P>
          <p>Your guesses so far: ${userData[id].userGusses}</P>
          </div>
        </body>
      </html>
      `);
  }
});
app.listen(PORT, ()=> console.log(`listening to port ${PORT}`));
