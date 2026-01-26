// 중요한 것은 document가 html 문서의 영역들을 나타냄
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 아무것도 없으면 빈 배열을 변수에 넣음
let todos = JSON.parse(localStorage.getItem('todos')) || [];
console.log(todos);
/*
  내부 요스의 자료형은 객체임 왜냐하면 checkBox와 내용이 들어가야 하기 때문에
*/
function rederTodos(){
  // 기존 todo list를 초기화 -> 추가했을 때 누적 안되게 할거임
  todoList.innerHTML = '';
  // todos는 value에 해당하고 todoList는 ul 태그가 포함된 HTML 요소에 해당함
  // todos가 배열이기 때문에 html 요소로 만들어줄 거임
  todos.array.forEach((todo, index) => {
    // todos의 반복을 돌면 내부 요소가 존재함
    // localStorage의 todos key의 내부를 확인하면 배열로 저장됨
    // 거기의 요소는 객체인데 내부에 completed key를 가지고 
    // boolean 자료형이 있음 걔가 true일때와 false일때의 
    // css 별개로 나누기 위해서 class를 추가함
    const li = document.createElement('li');
    li.className = 'todo-item'; 
    if(todo.completed){
      li.classList.add('completed');
    }
    //li 태그 내부에도 특정 html 요소를 넣을 거임
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text; // 지금 comleted와 text라는 key를 가짐

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn'; // add-btn의 차이점을 꼭 학습해야함
    deleteBtn.innerHTML = '&times'; // x 기호에 해당함

    // li 변수에 추가해야함
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);

    todoList.appendChild(li);

    // 체크박스 버튼 눌렀을 때 todo.completed의 값이 true와 false로 변경되야함

    checkbox.addEventListener('change', ()=>{
      todos[index].completed = checkbox.checked;
      li.classList.toggle('completed', checkbox.checked);
      saveTodos(); // 아직 정의 안함
    })
  });
}

function saveTodos(){
  
}