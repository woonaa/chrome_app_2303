const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

///preventDefalut 브라우저의 기본동작을 막아줌
///`HEllo ${username}` 스트링 문자 합치는 팁 

function onLoginSumit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `HEllo ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(greeting.class);
}

loginForm.addEventListener("submit", onLoginSumit);
