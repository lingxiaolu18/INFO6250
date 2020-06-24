(function(){
  const addButton = document.querySelector('.add-button');

  addButton.disabled = true;
  const userInput = document.querySelector('input');
  userInput.addEventListener('input', (e)=>{
    addButton.disabled = !(userInput.value.length > 0);
  });



    addButton.addEventListener('click', (e)=>{
    addButton.disabled = true;
    const holder = document.createElement('span');
    const userInput = document.querySelector('input').value;
    const userInputSpan = document.createElement('span');
    userInputSpan.innerText = userInput;
    document.querySelector('input').value = "";
    const newItem = document.createElement('li');
    newItem.className = "listItem";
    const quantity = document.createElement('span');
    quantity.innerText = "0";
    const decrement = document.createElement('button');
    const increment = document.createElement('button');
    const remove = document.createElement('button');



    decrement.innerText = "-";
    increment.innerText = "+";
    remove.innerText = "x";
    decrement.disabled = true;
    decrement.addEventListener('click', (e)=>{
      quantity.innerText = (parseInt(quantity.innerText) - 1).toString();
      decrement.disabled = !(parseInt(quantity.innerText) > 0);
    });

    increment.addEventListener('click', (e)=>{
      quantity.innerText = (parseInt(quantity.innerText) + 1).toString();
      decrement.disabled = !(parseInt(quantity.innerText) > 0);
    });
    remove.addEventListener('click', (e)=>{
      newItem.remove();
    });


    document.querySelector('.inventory-list').appendChild(newItem);
    holder.className = "decrement";
    newItem.appendChild(userInputSpan);
    holder.appendChild(decrement);
    holder.appendChild(quantity);
    holder.appendChild(increment);
    holder.appendChild(remove);
    newItem.appendChild(holder);
    event.preventDefault();
  });
  console.log('client side JS loaded successfully');
})();
