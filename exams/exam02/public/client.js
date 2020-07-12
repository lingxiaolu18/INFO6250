/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
//jshint esversion:6

var appState = {
  isLoggedIn: false,
  error: ''
};

function renderLogin(showLogIn) {
  var login = document.querySelector('.login');

  if (showLogIn) {
    login.innerHTML = "\n    <label>Username: <input/></label>\n    <button class=\"to-login\" type=\"button\">Login</button>\n    ";
  } else {
    login.innerHTML = "";
  }
}

function renderLogout(showLogOut) {
  var logout = document.querySelector('.logout');

  if (showLogOut) {
    logout.innerHTML = "\n    <button class=\"to-logout\" type=\"button\">Logout</button>\n    ";
  } else {
    logout.innerHTML = "";
  }
}

function renderNewRecipeButton() {
  var createRecipe = document.querySelector('.create-recipe');
  createRecipe.innerHTML = "\n    <button class=\"create-button\" type=\"button\">New Recipe</button>\n    ";
  createRecipe.addEventListener('click', function (e) {
    if (event.target.className === 'create-button') {
      var renderedRecipes = document.querySelector('.recipes');
      renderedRecipes.innerHTML = "";
      createRecipe.innerHTML = "\n        <label for=\"title\">Cuisine Name: </label><textarea class='title' name=\"title\" rows=\"3\" cols=\"50\"></textarea><br>\n        <label for=\"ingredients\">Ingredients: </label><textarea class='ingredients' name=\"ingredients\" rows=\"5\" cols=\"50\"></textarea><br>\n        <label for=\"instructions\">Instructions: </label><textarea class='instructions' name=\"instructions\" rows=\"8\" cols=\"50\"></textarea><br>\n        <button class=\"submit-recipe\" type=\"button\">Submit</button>\n        ";
      renderTextArea();
      event.preventDefault();
    }
  });
}

function renderTextArea() {
  var createRecipe = document.querySelector('.create-recipe');
  var titleText = document.querySelector('.title');
  var ingredientsText = document.querySelector('.ingredients');
  var instructionsText = document.querySelector('.instructions');
  var submitButton = document.querySelector('.submit-recipe');
  submitButton.disabled = true;
  titleText.addEventListener('input', function (e) {
    submitButton.disabled = titleText.value.length <= 0 || ingredientsText.value.length <= 0 || instructionsText.value.length <= 0;
  });
  ingredientsText.addEventListener('input', function (e) {
    submitButton.disabled = titleText.value.length <= 0 || ingredientsText.value.length <= 0 || instructionsText.value.length <= 0;
  });
  instructionsText.addEventListener('input', function (e) {
    submitButton.disabled = titleText.value.length <= 0 || ingredientsText.value.length <= 0 || instructionsText.value.length <= 0;
  });
  submitButton.addEventListener('click', function (e) {
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["addRecipe"])(titleText.value, ingredientsText.value, instructionsText.value).then(function (response) {
      renderPage(response.itemId);
    })["catch"](function () {
      appState.error = 'user data not exist';
      renderPage(-1);
    });
  });
}

var homeButton = document.querySelector('.to-home');
homeButton.addEventListener('click', function (e) {
  renderPage(-1);
});

function renderErrors(text) {
  document.querySelector('.status').innerHTML = text;
}

function renderRecipes() {
  Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchAllRecipes"])().then(function (response) {
    document.querySelector('.recipes').innerHTML = '';

    for (var key in response) {
      document.querySelector('.recipes').innerHTML += "<li class=\"".concat(key, " , cuisine\">Cuisine: ").concat(response[key].recipeName, "</li><label class=\"author\">Author: ").concat(response[key].userName, "</label>");
    }
  });
}

function renderRecipe(recipeId) {
  document.querySelector('.recipes').innerHTML = '';
  Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchRecipe"])(recipeId).then(function (response) {
    console.log(response);
    document.querySelector('.recipes').innerHTML = "<li>Name: ".concat(response.recipeName, "</li><br><label>Author: ").concat(response.userName, "</label>\n      <p>Ingredients: ").concat(response.ingredients, "</p>\n      <p>Instructions: ").concat(response.instructions, "</p>");
  });
}

function renderPage(flag) {
  if (!appState.isLoggedIn) {
    renderLogin(true);
    renderLogout(false);
  } else {
    renderLogin(false);
    renderLogout(true);
    renderNewRecipeButton();
  }

  if (flag < 0) {
    renderRecipes();
  } else {
    renderRecipe(flag);
  }

  renderErrors(appState.error);
}

var recipesList = document.querySelector('.recipes');
recipesList.addEventListener('click', function (e) {
  var eventTarget = event.target;

  for (var i = 0; i < eventTarget.classList.length; i++) {
    if (!isNaN(eventTarget.classList[i])) {
      renderPage(eventTarget.classList[i]);
    }
  }
});
var login = document.querySelector('.login');
login.addEventListener('click', function (e) {
  if (!e.target.classList.contains('to-login')) {
    return;
  }

  var username = login.querySelector('input').value;
  Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLogIn"])(username).then(function (response) {
    appState.isLoggedIn = true;
    appState.error = '';
    renderPage(-1);
  })["catch"](function () {
    appState.error = 'User name is empty or contains "dog"!';
    renderPage(-1);
  });
});
var logout = document.querySelector('.logout');
logout.addEventListener('click', function (e) {
  if (!e.target.classList.contains('to-logout')) {
    return;
  }

  var addNewRecipe = document.querySelector('.create-recipe');
  addNewRecipe.innerHTML = "";
  Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLogOut"])().then(function (response) {
    appState.isLoggedIn = false;
    appState.error = '';
    renderPage(-1);
  })["catch"](function (err) {
    console.log(err);
    appState.error = 'Logout failed';
    renderPage(-1);
  });
});
Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLoginStatus"])().then(function () {
  appState.isLoggedIn = true;
  renderPage(-1);
})["catch"](function () {
  appState.isLoggedIn = false;
  renderPage(-1);
});

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! exports provided: fetchLogIn, fetchLogOut, fetchLoginStatus, fetchAllRecipes, fetchRecipe, addRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogIn", function() { return fetchLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogOut", function() { return fetchLogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLoginStatus", function() { return fetchLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllRecipes", function() { return fetchAllRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipe", function() { return fetchRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRecipe", function() { return addRecipe; });
//jshint esversion:6
var fetchLogIn = function fetchLogIn(username) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return resonse.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var fetchLogOut = function fetchLogOut() {
  return fetch('/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return resonse.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var fetchLoginStatus = function fetchLoginStatus() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return Promise.reject({
        code: 'login-invalid'
      });
    }

    return;
  });
};
var fetchAllRecipes = function fetchAllRecipes() {
  return fetch('/recipes', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(reject);
      });
    }

    return response.json();
  });
};
var fetchRecipe = function fetchRecipe(recipeId) {
  return fetch('/recipes/' + recipeId, {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return Promise.reject({
        code: 'item does not exist'
      });
    }

    return response.json();
  });
};
var addRecipe = function addRecipe(title, ingredients, instructions) {
  return fetch('/recipes', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      recipeName: title,
      ingredients: ingredients,
      instructions: instructions
    })
  })["catch"](function () {
    return Promise.reject({
      code: 'newwork-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};

/***/ })

/******/ });
//# sourceMappingURL=client.js.map