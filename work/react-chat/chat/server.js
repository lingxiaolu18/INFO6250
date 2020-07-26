//jshint esversion:6
const data = require('./data');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser =  require('cookie-parser');
const {v4: uuidv4} = require('uuid');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));

app.get('/login', (req, res)=>{
  const uid = req.cookies.uid;
  if(!uid){
    res.status(404).json({code:'user name not found'});
    return;
  }
  else if(data.users[uid] && data.users[uid].active){
    res.status(200).json("success");
  }
  else res.status(401).json({code:"inactive account"});
});

app.post('/login', (req, res)=>{
  const username = req.body.username;
  if((!username || username === 'dog') && !req.cookies.uid){
    res.status(403).json({code: 'bad login info'});
    return;
  }
  else if(req.cookies.uid){
    res.status(200).json({users: data.users, messages: data.messages});
    return;
  }
  else if(data.findUserId(username)){
    const userId = data.findUserId(username);
    data.users[userId].active = true;
    res.cookie('uid', data.users[userId].uid);
    res.status(200).json({users: data.users, messages: data.messages});
    return;
  }
  const uid = uuidv4();
  data.addUser(username, uid);
  res.cookie('uid', uid);
  res.status(200).json({users: data.users, messages: data.messages});
});

app.delete('/logout', (req, res)=>{
  const uid = req.cookies.uid;
  if(!uid || !data.users[uid]){
    res.status(404).json({code:'user name not found'});
    return;
  }
  data.removeUser(uid);
  res.clearCookie('uid').status(200).json({code:'success'});
});

app.post('/sendMessage', (req, res)=>{
  const text = req.body.message;
  const uid = req.cookies.uid;
  if(!uid || !data.users[uid]){
    res.status(403).json({code:'You are not allowed'});
    return;
  }
  data.addMessage({uid, text});
  res.status(200).json({users: data.users, messages: data.messages});
});

app.get('/users', (req, res)=>{
  const uid = req.cookies.uid;
  if(!uid || !data.users[uid]){
    res.status(403).json({code:'You are not allowed'});
    return;
  }
  res.status(200).json(data.getUsers());
});

app.get('/messages', (req, res)=>{
  const uid = req.cookies.uid;
  if(!uid || !data.users[uid]){
    res.status(403).json({code:'You are not allowed'});
    return;
  }
  res.status(200).json(data.messages);
});

app.listen(PORT, ()=>console.log(`listening to port ${PORT}`));
