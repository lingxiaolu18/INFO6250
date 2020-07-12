//jshint esversion:6
import{
  fetchLogIn,
  fetchLogOut,
  fetchLoginStatus,
  fetchRecipe,
  fetchAllRecipes,
  addRecipe
} from './services';

const appState = {
  isLoggedIn:false,
  error:''
};
function renderLogin(showLogIn){
  const login = document.querySelector('.login');
  if(showLogIn){
    login.innerHTML = `
    <label>Username: <input/></label>
    <button class="to-login" type="button">Login</button>
    `;
  }
  else{
    login.innerHTML = ``;
  }
}
function renderLogout(showLogOut){
  const logout = document.querySelector('.logout');
  if(showLogOut){
    logout.innerHTML = `
    <button class="to-logout" type="button">Logout</button>
    `;
  }
  else{
    logout.innerHTML = ``;
  }
}
function renderNewRecipeButton(){
  const createRecipe = document.querySelector('.create-recipe');
    createRecipe.innerHTML = `
    <button class="create-button" type="button">New Recipe</button>
    `;
    createRecipe.addEventListener('click', (e)=>{
      if(event.target.className === 'create-button'){
        const renderedRecipes = document.querySelector('.recipes');
        renderedRecipes.innerHTML = ``;
        createRecipe.innerHTML = `
        <label for="title">Cuisine Name: </label><textarea class='title' name="title" rows="3" cols="50"></textarea><br>
        <label for="ingredients">Ingredients: </label><textarea class='ingredients' name="ingredients" rows="5" cols="50"></textarea><br>
        <label for="instructions">Instructions: </label><textarea class='instructions' name="instructions" rows="8" cols="50"></textarea><br>
        <button class="submit-recipe" type="button">Submit</button>
        `;
        renderTextArea();
        event.preventDefault();
      }
    });
}
function renderTextArea(){
  const createRecipe = document.querySelector('.create-recipe');
  const titleText = document.querySelector('.title');
  const ingredientsText = document.querySelector('.ingredients');
  const instructionsText = document.querySelector('.instructions');
  const submitButton = document.querySelector('.submit-recipe');
  submitButton.disabled = true;
  titleText.addEventListener('input', (e)=>{
    submitButton.disabled = titleText.value.length<=0 || ingredientsText.value.length<=0 || instructionsText.value.length<=0;
  });
  ingredientsText.addEventListener('input', (e)=>{
    submitButton.disabled = titleText.value.length<=0 || ingredientsText.value.length<=0 || instructionsText.value.length<=0;
  });
  instructionsText.addEventListener('input', (e)=>{
    submitButton.disabled = titleText.value.length<=0 || ingredientsText.value.length<=0 || instructionsText.value.length<=0;
  });
  submitButton.addEventListener('click', (e)=>{
    addRecipe(titleText.value, ingredientsText.value, instructionsText.value)
    .then((response)=>{
      renderPage(response.itemId);
    })
    .catch(()=>{
      appState.error = 'user data not exist';
      renderPage(-1);
    });
  });
}
const homeButton = document.querySelector('.to-home');
homeButton.addEventListener('click', (e)=>{
  renderPage(-1);
});
function renderErrors(text){
  document.querySelector('.status').innerHTML = text;
}
function renderRecipes(){
  fetchAllRecipes()
  .then((response)=>{
    document.querySelector('.recipes').innerHTML = '';
    for(const key in response){
      document.querySelector('.recipes').innerHTML +=
      `<li class="${key} , cuisine">Cuisine: ${response[key].recipeName}</li><label class="author">Author: ${response[key].userName}</label>`;
    }
  });
}
function renderRecipe(recipeId){
  document.querySelector('.recipes').innerHTML = '';
  fetchRecipe(recipeId)
  .then((response)=>{
    console.log(response);
      document.querySelector('.recipes').innerHTML =
      `<li>Name: ${response.recipeName}</li><br><label>Author: ${response.userName}</label>
      <p>Ingredients: ${response.ingredients}</p>
      <p>Instructions: ${response.instructions}</p>`;
  });
}
function renderPage(flag){
  if(!appState.isLoggedIn){
    renderLogin(true);
    renderLogout(false);
  }else{
    renderLogin(false);
    renderLogout(true);
    renderNewRecipeButton();
  }
  if(flag < 0){
    renderRecipes();
  }
  else{
    renderRecipe(flag);
  }
  renderErrors(appState.error);
}
const recipesList= document.querySelector('.recipes');
recipesList.addEventListener('click', (e)=>{
  const eventTarget = event.target;
  for(let i = 0; i < eventTarget.classList.length; i++){
    if(!isNaN(eventTarget.classList[i])){
      renderPage(eventTarget.classList[i]);
    }
  }
});
const login = document.querySelector('.login');
login.addEventListener('click', (e)=>{
  if(!e.target.classList.contains('to-login')){
    return;
  }
  const username = login.querySelector('input').value;
  fetchLogIn(username)
  .then(response=>{
    appState.isLoggedIn = true;
    appState.error = '';
    renderPage(-1);
  })
  .catch(()=>{
    appState.error = 'User name is empty or contains "dog"!';
    renderPage(-1);
  });
});
const logout = document.querySelector('.logout');
logout.addEventListener('click', (e)=>{
  if(!e.target.classList.contains('to-logout')){
    return;
  }
  const addNewRecipe = document.querySelector('.create-recipe');
  addNewRecipe.innerHTML = ``;
  fetchLogOut()
  .then(response=>{
    appState.isLoggedIn = false;
    appState.error = '';
    renderPage(-1);
  })
  .catch((err)=>{
    console.log(err);
    appState.error = 'Logout failed';
    renderPage(-1);
  });
});
fetchLoginStatus()
.then(()=>{
  appState.isLoggedIn = true;
  renderPage(-1);
})
.catch(()=>{
  appState.isLoggedIn = false;
  renderPage(-1);
});
