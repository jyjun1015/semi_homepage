const form = document.querySelector(".js-form"),
	  input = form.querySelector("input"),
		greeting = document.querySelector('.js-greetings');

const USER_LS = "유저",
	  SHOWING_CN = "showing";

function saveName(text){
	localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
// form 함수의 submit이 제대로 동작 하지 않도록
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue)
	
}

function askForName(){
	form.classList.add(SHOWING_CN);
	// console.log(form.classList)
	form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `안녕하세요? ${text}님 \n\n
1,2,3 순위를 입력해주세요`;
}

function loadName(){
	const currentUser = localStorage.getItem(USER_LS);

	
	if(currentUser === null){
		console.log("?")
		askForName()
	}else{
		paintGreeting(currentUser);
	}
}


function init(){
	loadName();
}

init();
