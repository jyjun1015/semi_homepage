const toDoForm = document.querySelector(".js-toDoForm"),
	  toDoInput = toDoForm.querySelector("input"),
	  toDoList = document.querySelector(".js-toDoList")

// console.log(toDoform)
const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// 	자바스크립트의 값을 저장하기 위해
}


function paintToDo(text){
	console.log(text)
	const li = document.createElement("li");

	const delBtn = document.createElement("button")
	
	const newId = toDos.length +1;
	
	delBtn.value = "❤";
	
	const span = document.createElement("span")
	span.innderText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	
	// console.log(li)
	toDoList.appendChild(li);
	
	li.id = newId;
	
	
	const toDoObj = {
		text: text,
		id : newId
	};
	
	toDos.push(toDoObj);
	saveToDos()
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue)
	toDoInput.value = "";
}

function loadToDos(){
	const loadedToDos = localStorage.getItem(TODOS_LS)
	
	if(loadedToDos !== null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo){
// 			toDo는 함수보다는 객체에 가까운 듯? toDo.text 로 불러오게
			paintToDo(toDo.text);
		})
	}else{
		
	}
}

function init(){
	loadToDos();
	toDoForm.addEventListener("submit",handleSubmit)
}

init();