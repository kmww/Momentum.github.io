const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
    clock.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    clock.classList.add(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    paintGreeting(savedUsername);
}