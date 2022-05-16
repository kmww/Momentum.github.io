const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");   // document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

//const toDos = [];                                    //application이 시작될때 이 array가 항상 비어있기 때문에 초기화됨
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   //JSON.stringify(....) <-- ....이 무엇이든 string으로 교체
}

function delToDo(event){
    //console.dir(event.target.parentElement);  //parentElement는 클릭된 element의 부모
    const list = event.target.parentElement;
    list.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(list.id));    //toDo는 toDos DB에 있는 element중 하나
    saveToDos();
}


function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");   //span은 아직 li내부에 들어있지 않음
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", delToDo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";                 ///input입력시 창 비우기(!newTodo가 비워지는것은 아님!)
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),                   /// 랜덤한 id를 주기에 Date.now()가 적합함
    }
    toDos.push(newTodoObj);  //localStorage에는 오직 텍스트만 저장 가능 array 불가능!
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

/*function sayHello(item){                   //event처럼 기본 제공 방법:1
    console.log("this is the turn of", item);
}*/

if(savedToDos !== null){                    //savedToDos가 localStorage에 존재한다면 
    const parsedToDos = JSON.parse(savedToDos);     //string을 array으로 바꿈
    //parsedToDos.forEach(sayHello);            //array의 item 들에 대한 한개의 function만 실행
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));  //방법 2 =>(화살표 함수)
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


/*
function Filter(item){         //!‼ 만약 새 array에서 object를 유지하고 싶으면 반드시 true를 return 해야함
    return item !== 3
}

[1, 2, 3, 4].filter(Filter)  //삭제하는 것이 아닌 제외하고 새로운 array 만드는 것임 방법:1

[1, 2, 3, 4].filter(item => tiem !== 3)

(과정)
Filter(1) = return true = 1
Filter(2) = return true = 2
Filter(3) = return false
Filter(4) = return true = 4
(결과)
[1, 2, 4]
*/
