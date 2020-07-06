//jshint esversion:6

export const fetchLogIn = (username)=>{
  return fetch('/session', {
    method:'POST',
    headers:new Headers({
      'content-type':'application/json',
    }),
    body:JSON.stringify({username}),
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return resonse.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};

export const fetchLogOut = ()=>{
  return fetch('/session', {
    method:'DELETE'
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return resonse.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};



export const fetchLoginStatus = () => {
  return fetch('/session', {
    method: 'GET',
  })
  .catch( () => {
    return Promise.reject({code: 'network-error'});
  })
  .then( (response) => {
    if(!response.ok) {
      return Promise.reject({ code: 'login-invalid' });
    }
    return;
  });
};

export const fetchAllRecipes = ()=>{
  return fetch('/recipes', {
    method:'GET'
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return response.json().then(result=>Promise.reject(reject));
    }
    return response.json();
  });
};

export const fetchRecipe = function(recipeId){
  return fetch('/recipes/' + recipeId, {
    method:'GET',
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return Promise.reject({code:'item does not exist'});
    }
    return response.json();
  });
};


export const addRecipe = function(title,ingredients, instructions){
  return fetch('/recipes', {
    method:'POST',
    headers:new Headers({
      'content-type':'application/json',
    }),
    body:JSON.stringify({recipeName:title, ingredients:ingredients, instructions:instructions}),
  })
  .catch(()=>{
    return Promise.reject({code:'newwork-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return response.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};
