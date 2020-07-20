//jshint esversion:6
const users = {
  3214:{
    username: "Jackle",
    active: true,
    uid:3214
  },
  2214:{
    username: "Tom",
    active: true,
    uid:2224
  }
};

const messages = [
  {
    sender: "Jackle",
    timestamp: new Date(),
    text: "time for sleep!"
  },
  {
    sender: "Tom",
    timestamp: new Date(),
    text: "Ok Daddy..."
  }
];

function findUserId(username){
  for(let user in Object.values(users)){
    if(user.username === username) return user.uid;
  }
  return null;
}

function addMessage({uid, timestamp = new Date(), text}){
  messages.push({sender: users[uid].username, timestamp, text});
}

function addUser(username, userid){
  users[userid] = {username: username, active: true, uid: userid};
}

function removeUser(userid){
    users[userid].active = false;
}

function getUsers(){
  const usernames = [];
  for(let user in Object.kes(users)){
    usernames.push(users[user].username);
  }
  return usernames;
}
const data = {
  users,
  messages,
  addMessage,
  addUser,
  removeUser,
  findUserId,
  getUsers
};
module.exports = data;
