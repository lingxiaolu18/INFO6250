//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//object to hold inventory
const inventory = {
  //dummy data for testing:
  1:{
    name: "fishBall",
    quantity: 200
  },
  2:{
    name: "banana",
    quantity: 200
  },
  3:{
    name: "apple",
    quantity: 200
  },
  4:{
    name: "orange",
    quantity: 200
  },
  5:{
    name: "grape",
    quantity: 200
  },
  6:{
    name: "watermelon",
    quantity: 200
  }
};
let id = Object.keys(inventory).length + 1;

//restful services
app.get('/', (req, res)=>{
  const sid = req.cookies.sid;
  if(!sid){
    //return status 401, set up cookie
    res.status(401);
  }
  else{
    res.status(200);
  }
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/session', (req, res)=>{
  const userName = req.body.userId[0];
  // console.log(value);
  if(userName.includes("dog") || userName.length === 0 || userName.includes(" ")){
    res.status(401).send("bad login info");
  }
  else{
    res.cookie('sid', userName, {maxAge: 300000});
    userData = userName;
    res.redirect('/');
  }
});

app.get('/session', (req, res)=>{
  res.clearCookie('sid');
  res.redirect('/');
});



//update inventory accordingly
app.patch('/items/:itemid', (req, res)=>{
  const sid = req.cookies.sid;
  if(!sid){
    res.status(401);
    // res.sendFile(__dirname + '/public/index.html');
  }
  else{
    const id = req.params.itemid;
    if(!inventory[id]){
      res.status(400);
    }
    else{
      const newQuantity = req.body.quantity;
      inventory[id].quantity = newQuantity;
      res.status(200);
    }
    res.send();
  }
});

//delete an item
app.delete('/items/:itemid', (req, res)=>{
  const sid = req.cookies.sid;
  if(!sid){
    res.redirect('/');
  }
  else{
    const itemid = req.params.itemid;
    if(!inventory[itemid]){
      res.status(400).send();
    }
    else{
      console.log(itemid);
      //delete the specific item stored in the object:
      delete inventory[itemid];
      console.log(inventory); //test if item deleted successfully;
    }
  }
});



//get items already exists on the server
app.get('/items', (req, res)=>{
  res.send(JSON.stringify(inventory));
});


//add a new item
app.post('/items', (req, res)=>{
  console.log(req.body);//收到request
  const itemName = req.body.name;
  console.log(itemName);
  const itemQuantity = req.body.quantity;
  console.log(itemQuantity);
  if(!itemName){
    console.log("first segment executed");
    res.status(406).send("missing item name");
  }
  else{
    Object.keys(inventory).forEach(key => {
      if(inventory[key].name === itemName){
        res.status(409).send("duplicate item");
      }
    });


    inventory[id] = {
      name: itemName,
      quantity: itemQuantity
    };
    const obj = {
      name: itemName,
      quantity: itemQuantity,
      itemId: id
    };
    id++;
    console.log(obj);
    res.status(200);
    res.send(JSON.stringify(obj));
  }
});








app.use(express.static(__dirname + '/public'));
app.listen(PORT, ()=> console.log(`listening to port ${PORT}`));
