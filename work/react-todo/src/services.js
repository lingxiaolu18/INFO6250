export const fetchLogIn = (username)=>{
    return fetch('/session', {
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
    return fetch('/session', {
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

export const fetchLoginStatus = ()=>{
    return fetch('/session', {
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


export const fetchTheme = (username)=>{
    return fetch('/theme/' + username, {
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

export const fetchUpdateTheme = (username, theme)=>{
    return fetch('/theme/' + username, {
        method:'PUT',
        headers:new Headers({
            'content-type':'application/json',
        }),
        body:JSON.stringify({theme})
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


export const fetchAllTasks = (username)=>{
    return fetch('/tasks/' + username, {
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


export const fetchDeleteAllTasks = (username)=>{
    return fetch('/tasks/' + username, {
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


export const fetchAddTask = (username, task)=>{
    return fetch('/tasks/' + username, {
        method:'POST',
        headers:new Headers({
            'content-type':'application/json',
        }),
        body:JSON.stringify({task})
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

export const fetchOneTask = (username, taskId)=>{
    return fetch('/tasks/' + username + '/' + taskId, {
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

export const fetchUpdateTask = (username, taskId, task)=>{
    return fetch('/tasks/' + username + '/' + taskId, {
        method:'PUT',
        headers:new Headers({
            'content-type':'application/json',
        }),
        body:JSON.stringify({task})
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

export const fetchDeleteOneTask = (username, taskId)=>{
    return fetch('/tasks/' + username + '/' + taskId, {
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



export const filteredDataStream = (data) => {
    const collections = [];
    const dataStream = data.data;
    // console.log(Object.keys(dataStream));
    for(let i = 0; i < Object.keys(dataStream).length; i++){
        const currTaskId = Object.keys(dataStream)[i];
        const collection = {};
        collection.task = '';
        collection.taskId = currTaskId;
        collection.done = false;
        for(let j = 0; j < Object.keys(dataStream[currTaskId]).length - 1; j++){
            collection.task += dataStream[currTaskId][j];
        }
        collections.push(collection);
    }
    console.log(collections);
    return collections;
}

export const filteredData = (data) => {
    const dataStream = data.data;
    const collection = {};
    collection.task = '';
    collection.taskId = dataStream.taskId;
    collection.done = false;
    for(let key = 0; key < Object.keys(dataStream).length - 1; key++){
        collection.task += dataStream[key];
    }
    return collection;
}