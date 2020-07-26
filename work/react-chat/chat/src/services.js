//jshint esversion:6
export const fetchLogIn = (username)=>{
  return fetch('/login', {
    method:'POST',
    headers:new Headers({
      'content-type':'application/json',
    }),
    body:JSON.stringify({username})
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return response.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};




export const fetchLogOut = ()=>{
  return fetch('/logout', {
    method:'DELETE'
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return response.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};


export const sendMessage = (message)=>{
  return fetch('/sendMessage', {
    method:'POST',
    headers:new Headers({
      'content-type':'application/json',
    }),
    body:JSON.stringify({message})
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return response.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};

export const fetchLoginUsers = ()=>{
  return fetch('/users', {
    method:'GET'
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return response.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};


export const fetchMessages = ()=>{
  return fetch('/messages', {
    method:'GET'
  })
  .catch(()=>{
    return Promise.reject({code:'network-error'});
  })
  .then((response)=>{
    if(!response.ok){
      return response.json().then(result=>Promise.reject(result));
    }
    return response.json();
  });
};


export const fetchLoginStatus = ()=>{
  return fetch('/login', {
    method:'GET'
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
