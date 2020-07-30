import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import AddTaskBox from './AddTaskBox';
import Todos from './Todos';
import Theme from './Theme';
import ToggleDone from './ToggleDone';
import SortPane from './SortPane';
import * as services from './services';
import { isCompositeComponent } from 'react-dom/test-utils';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('light'); //default theme
  const [showDoneTasks, setShowDoneTasks] = useState(true);
  
  //刷新时导致所有state为空，需要用cookie重新获取用户名
  useEffect(() => {
    services.fetchLoginStatus()
    .then((response) => {
      console.log("You are logged in!");
      const loggedInUser = response.data.username;
      const userTheme = response.data.theme;
      setUserName(loggedInUser);
      setIsLoggedIn(true);//don't comment this line, retrieve data once refreshed
      callFetchTheme(loggedInUser);
      pullTodoList(loggedInUser);
    })
    .catch((err) => {
      console.log("Not logged in!");
      setIsLoggedIn(false);
    });
  }, []);

  const callLoginService = (username) => {
    setUserName(username);
    services.fetchLogIn(username)
    .then((data) => {
      setIsLoggedIn(true);
      //fetch user theme
      callFetchTheme(data.data.username);
      pullTodoList(data.data.username);
      console.log("login successful");
    })
    .catch((err) => {
      console.log("login failed");
      //change err label here
    });
  };

  const callFetchTheme = (username) => {
    services.fetchTheme(username)
    .then((data) => {
      const userTheme = data.data;
      console.log(userTheme);
      if(userTheme !== 'funky'){
        setTheme(userTheme);
      }
    })
    .catch((err) => {
      console.log('fetch theme failed');
    });
  };


  const callUpdateTheme = (username, theme) => {
    services.fetchUpdateTheme(username, theme)
    .then((data) => {
      console.log(data.data);
    })
    .catch((e) => {
      console.log(e);
    });
  };


  const callAddTaskService = (username, task) => {
    services.fetchAddTask(username, task)
    .then((data) => {
      //data改成array
      const temp = services.filteredData(data);
      tasks.push(temp);
      setTasks(tasks);
    })
    .catch((err) => {
      console.log(err.message);
      //change err label here
    });
    pullTodoList(userName);
  };

  const pullTodoList = (username) => {
    services.fetchAllTasks(username)
    .then((data) => {
      const currData = services.filteredDataStream(data);
      setTasks(currData);
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const updateTask = (username, taskId, task) => {
    services.fetchUpdateTask(username, taskId, task)
    .then((data) => {
      // data.data = newTask; newTask = {task:..., taskId:...}
      const newTask = data.data;
      console.log(newTask);
      const temp = [];
      for(let i = 0; i < tasks.length; i++){
        if(tasks[i].taskId !== newTask.taskId){
          temp.push(tasks[i]);
        }
        else{
          temp.push(newTask);
        }
      }
      setTasks(temp);
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const removeTask = (username, taskId) => {
    services.fetchDeleteOneTask(username, taskId)
    .then((data) => {
      //data.data = task; task = removed task = {task:..., taskId:...}
      const removedTask = data.data;
      const temp = [];
      for(let i = 0; i < tasks.length; i++){
        if(tasks[i].taskId !== removedTask.taskId){
          temp.push(tasks[i]);
        }
      }
      setTasks(temp); 
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const handleDone = (tasks, taskId, setTasks, doneOrNot) => {
    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].taskId === taskId){
        tasks[i].done = doneOrNot;
        break;
      }
    }
    setTasks(tasks);
  }

  const sortAscending = () => {
    function compare(a, b){
      if(a.task > b.task){
        return 1;
      }
      else if(a.task < b.task){
        return -1;
      }
      else return 0;
    }
    setTasks([...tasks.sort(compare)]);
  }

  const sortDescending = () => {
    function compare(a, b){
      if(a.task > b.task){
        return -1;
      }
      else if(a.task < b.task){
        return 1;
      }
      else return 0;
    }
    setTasks([...tasks.sort(compare)]);
  }

  const sortDone = () => {
    function compare(a, b){
      if(a.done > b.done){
        return -1;
      }
      else if(a.done < b.done){
        return 1;
      }
      else return 0;
    }
    setTasks([...tasks.sort(compare)]);
  }

  const sortNotDone = () => {
    function compare(a, b){
      if(a.done > b.done){
        return 1;
      }
      else if(a.done < b.done){
        return -1;
      }
      else return 0;
    }
    setTasks([...tasks.sort(compare)]);
  }

  const addTaskBox = isLoggedIn? <AddTaskBox userName = {userName} callAddTaskService = {callAddTaskService}/> : <Login callLoginService = {callLoginService}/>;
  const todos = isLoggedIn? <Todos showDoneTasks = {showDoneTasks} tasks = {tasks} setTasks = {setTasks} handleDone = {handleDone} removeTask = {removeTask} editTask = {updateTask} username = {userName} tasks = {tasks}/> : '';
  const sort = isLoggedIn? <SortPane sortDone = {sortDone} sortNotDone ={sortNotDone} sortAscending = {sortAscending} sortDescending = {sortDescending} tasks = {tasks} setTasks = {setTasks}/> : '';
  const setThemePane = isLoggedIn? <Theme setTheme={setTheme} callUpdateTheme={callUpdateTheme} userName={userName}/> : '';
  const toogleDone = isLoggedIn? <ToggleDone setShowDoneTasks = {setShowDoneTasks}/> : '';
  return (
    <div>
      <div className={theme}>
        {addTaskBox}
        {setThemePane}
        {sort}
        {toogleDone}
        {todos}
      </div>
    </div>
  );
}
export default App;
