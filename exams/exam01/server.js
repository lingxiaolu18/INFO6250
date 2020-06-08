const express = require('express');
const bodyParser = require('body-parser');
const CompareResult = require('./compare');
const app = express();
const PORT = 3000;
const game = require('./words');
const UserGusses = [];
const RandomWord = game[Math.floor((Math.random()*game.length + 1))];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

console.log(`The random word is: ${RandomWord}`);
app.get('/', function(req, res){
  res.send(`
    <h1 class="header">Welcome to Word Guess!
    <div class="wordList">
    <p>Guess a word from this list:</P>
    <p>${game}</P>
    </div>
    <div class="form">
      <form class="input" action="/" method="post">
        <label for="guess">Take your guess:</label>
        <input type="text" name="guess" value="" placeholder="type your guess">
        <input type="submit" name="guess" value="Submit!">
      </form>
    </div>
    `);
});
app.post('/', function(req, res){
  // console.log(req.body.guess[0]);
  const input = req.body.guess[0].toUpperCase();
  if(game.includes(input)){
    UserGusses.push(input);
    let matched = CompareResult(RandomWord, input);
    if(matched < RandomWord.length){
      res.send(`
        <div>
        <p>this is your ${UserGusses.length} turn, take your time!</P>
        <p>Your guess matches ${matched} letters</P>
        <p>${UserGusses}</P>
        </div>
        <a href="/">Take Another Guess</a>
        `);
    }
    else{
      res.send(`
        <div>
        <p>You did it! You took ${UserGusses.length} guesses to finish!</P>
        <a href="/">Start A New Game</a>
        </div>
        `);
    }
  }
  else{
    res.send(`
      <div>
      <p>This is a invalid word, try once more</P>
      <p>You've guessed: ${UserGusses}</P>
      </div>
      <a href="/">Take Another Guess</a>
      `);
  }
});
app.listen(PORT, ()=> console.log(`listening to port ${PORT}`));
