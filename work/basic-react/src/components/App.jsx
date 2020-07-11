import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Question from "./Question";
import Choice from "./Choice";
import Counter from "./Counter";
import questiones from '../questiones';


let currentCount = 0;
function App() {
    const [questionAppeared, setQuestionAppeared] = useState({});
    const temp = [];
    let index = 0;
    search : for(let j = 0; j < questiones.length; j++){
      if(questionAppeared){
          if(questionAppeared[questiones[j].key]) continue search;
      }
      temp.push(questiones[j]);
    }
    
    const curr = Math.floor(Math.random() * temp.length);
  

    function checkAnswer(a, b){
      if(a.length !== b.length) return false;
      for(let i = 0; i < a.length; i++){
          if(a[i] !== b[i]) return false;
      }
      return true;
    }

    function handleClick(e){
      const boxes = document.querySelectorAll(".boxes");
      const userGuesses = [];
      for(let i = 0; i < boxes.length; i++){
          if(boxes[i].checked){
              userGuesses.push(i);
          }
          boxes[i].checked = false; 
      }
      const trueAnswers = questiones[e.target.dataset.key].answer;
      if(checkAnswer(userGuesses, trueAnswers)){
        currentCount++;
        alert("correct!");
      } 
      else alert("failed!");   
      setQuestionAppeared(questionAppeared =>{
         return{...questionAppeared, [temp[curr].key] : temp[curr]};
      });
      
    }
  if(temp[curr]){
    return(
      <div>
        <Question
        key = {temp[curr].key}
        title = {temp[curr].title}
      />
      {temp[curr].choices.map(choice=>(
        <Choice
          key = {index++}
          choice = {choice}
          id = {index}
        />
      ))}
      <button
          onClick = {handleClick}
          data-key = {temp[curr].key}
          type = "button"
      >
      submit
      </button>
      <p>Your Current Score:</p>
      <Counter 
        count = {currentCount}
      />
      </div>
    )
  }
  else{
    return(
      <div>
      <p>You've Finished All Questiones!</p>
      <p>Your Final Score:</p>
      <Counter 
        count = {currentCount}
      />
      </div>
    )
  }
  
}



export default App;
