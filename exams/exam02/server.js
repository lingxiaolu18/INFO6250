//jshint esversion:6
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const data = require('./data');
const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
//check if user's logged in
app.get('/session', (req, res)=>{
  const uid = req.cookies.uid;
  if(!uid){
    res.status(401).json({code:'provide-error'});
    return;
  }
  if(!data.users[uid]){
    res.clearCookie('uid');
    res.status(403).json({code:'provide-error'});
    return;
  }
  res.sendStatus(200);
});
//craeting new user:
app.post('/session', (req, res)=>{
  const username = req.body.username;
  if(!username || username === 'dog'){
    res.status(403).json({code:'provide-error'});
    return;
  }
  const uid = uuidv4();
  data.users[uid] = {
    userName: username
  };
  res.cookie('uid', uid);
  res.status(200).json({code:'success'});
});
//delete a user:
app.delete('/session', (req, res)=>{
  const uid = req.cookies.uid;
  if(!uid){
    res.status(404).json({code:'provide-error'});
    return;
  }
  const username = data.users[uid].userName;
  if(!username){
    res.status(404).json({code:'provide-error'});
    return;
  }
  delete data.users[uid];
  res.clearCookie('uid');
  res.status(200).json({code:'success'});
});
//getting an existing recipe:
app.get('/recipes/:recipeId', (req, res)=>{
  const recipeId = req.params.recipeId;
  if(!data.recipes[recipeId]){
    res.status(404).json({code:'provide-error'});
    return;
  }
  res.status(200).json(data.recipes[recipeId]);
});
//getting all existing recipes:
app.get('/recipes', (req, res)=>{
  res.status(200).json(data.recipes);
});
//creating new recipe:
app.post('/recipes', (req, res)=>{
  const uid = req.cookies.uid;
  if(!uid || !data.users[uid]){
    res.clearCookie('uid');
    res.status(401).json({code:'provide-error'});
    return;
  }
  const recipe = req.body;
  const nextIndex = Object.keys(data.recipes).length + 1;
  data.recipes[nextIndex] = {};
  data.recipes[nextIndex].userName = data.users[uid].userName;
  data.recipes[nextIndex].recipeName = recipe.recipeName;
  data.recipes[nextIndex].ingredients= recipe.ingredients;
  data.recipes[nextIndex].instructions = recipe.instructions;
  res.status(200).json({itemId:nextIndex});
});
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );
