//jshint esversion:6
//use fetch to update page accordingly.
(function(){

  //initial fetch to check user's credentials
  fetch('/', {
    method:"GET",
    credentials: 'include',
    redirect:'follow'
  })
  .then(function(response){
    if(response.status === 401){
      //mandatory login, set other elements invisible
      document.querySelector(".errorMessage").innerText = "You need to login first!";
      document.querySelector(".container").style.visibility = "hidden";
    }
    else if(response.status === 200){
      //set login part invisible
      document.querySelector(".userLogin").style.visibility = "hidden";
    }
  })
  .catch(err=>console.log(err));


  //request user login:
    const buttonLogin = document.querySelector('.login');
    buttonLogin.disabled = true;
    const userRegisterName = document.querySelector('.userName');
    userRegisterName.addEventListener('input', (e)=>{
      buttonLogin.disabled = !(userRegisterName.value.length > 0);
    });



  //do a fetch to '/items' to render items saved on the server
  fetch('/items', {
    method:"GET",
    headers:{
        'content-type': 'application/json'
    },
    credentials: 'include',
    redirect: 'follow',
  })
  .then(response=> response.json()) //returns a promise
  .then(function(response){
    for(let key in response){
      createListItem(key, response[key].name, response[key].quantity);
    }
    document.querySelector(".loading").remove();
  });


//find the unordered list and add eventListener to it:
  const addListerner = function(target){
    target.addEventListener('click', (e)=>{
      const itemId = event.target.parentNode.parentNode.className;
      const target = event.target.parentNode.parentNode.querySelector('span.quantity');
      if(event.target.innerText === 'x'){
        fetch('/items/' + itemId, {
          method:"DELETE",
          headers:{
              'content-type': 'application/json'
          },
          credentials: 'include'
        })
        .then(function(response){
          if(response.status === 400){
            document.querySelector(".errorMessage").innerText = "The item you're trying to delete is not on the server!";
            throw Error('The item you are trying to delete is not on the server!');
          }
        })
        .catch(err=>console.log(err));
        event.target.parentNode.parentNode.remove();
      }
      else if(event.target.innerText === 'Update'){
        fetch('/items/' + itemId, {
          method:'PATCH',
          headers: {
          'Content-Type': 'application/json'
        },
          credentials: 'include',
          redirect: 'follow',
          body: JSON.stringify({
            quantity:target.innerText
          })
        })
        .then(function(response){
          console.log(response.status);
          if(response.status === 400){
            document.querySelector(".errorMessage").innerText = "The item you're trying to update is not there anymore!";
            event.target.parentNode.parentNode.remove();
            throw Error('The item you are trying to update is not there anymore!');
          }
        })
        .catch(err=>console.log(err));
      }
    });
  };
  //call function to add listener:
  const list = document.querySelector('.inventory-list');
  addListerner(list);




//function to create a list item inside unordered list:
const createListItem = function(id, name, quantity){
  const newItem = document.createElement('li');
  const holder = document.createElement('span');
  const nameHolder = document.createElement('span');
  nameHolder.innerText = name;
  nameHolder.className = "name";
  // newItem.className = "listItem";
  const quantityHolder = document.createElement('span');
  quantityHolder.innerText = quantity;
  quantityHolder.className = "quantity";
  const update = document.createElement('button');
  const remove = document.createElement('button');
  remove.innerText = "x";
  update.innerText = 'Update';
  document.querySelector('.inventory-list').appendChild(newItem);
  newItem.appendChild(nameHolder);
  holder.appendChild(quantityHolder);
  holder.appendChild(update);
  holder.appendChild(remove);
  newItem.appendChild(holder);
  newItem.className = id;
};




//'add' button
  const addButton = document.querySelector('.add-button');
  addButton.disabled = true;

//initialize userInput field
const userInput = document.querySelector('.itemName');
  userInput.addEventListener('input', (e)=>{
    addButton.disabled = !(userInput.value.length > 0);
  });
    addButton.addEventListener('click', (e)=>{
    console.log("clicked");
    addButton.disabled = true;
    const userInput = document.querySelector('.itemName').value;
    const itemQuantity = document.querySelector('.itemQuantity').value;

    fetch('/items', {
      method:'POST',
      headers: {
      'Content-Type': 'application/json'
    },
      credentials: 'include',
      redirect: 'follow',
      body: JSON.stringify({
        name:userInput,
        quantity:itemQuantity
      })
    })
    .then(function(response){
      console.log(response.status);
      if(response.status === 409){
        document.querySelector(".errorMessage").innerText = "Duplicate Item Dectected!";
      }
      else if(response.status === 406){
        document.querySelector(".errorMessage").innerText = "Missing Item name!";
      }
      console.log(response);
      console.log(response.ok);
      return response;
    })
    .then(response=>response.json())
    .then(function(response){
        createListItem(response.itemId, userInput, itemQuantity);
    })
    .catch(err=>{
      console.log(err);
    });
    document.querySelector('.itemName').value = "";
    document.querySelector('.itemQuantity').value = "0";
    event.preventDefault();
  });
  console.log('client side JS loaded successfully');
})();
