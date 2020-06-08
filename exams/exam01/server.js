const express = require('express');
const bodyParser = require('body-parser');
const CompareResult = require('./compare');
const app = express();
const PORT = 3000;
const game = require('./words');
const UserGusses = [];
const RandomWord = game[Math.floor((Math.random() + 1)*game.length)];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
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
  console.log(req.body.guess[0]);
  if(game.includes(req.body.guess[0])){
    UserGusses.push(req.body.guess[0]);
    // console.log(UserGusses);
    res.send(`
      <div>
      <p>this is your ${UserGusses.length} turn, take your time!</P>
      <p>Your guess matches${CompareResult(RandomWord, req.body.guess[0])} letters</P>
      <p>${UserGusses}</P>
      </div>
      <a href="/">Take Another Guess</a>
      `);
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
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));
