const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos(){
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if(todo.completed){
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';

    li.append(checkbox, span, deleteBtn);
    todoList.appendChild(li);

    checkbox.addEventListener('change', ()=>{
      todos[index].completed = checkbox.checked;
      li.classList.toggle('completed', checkbox.checked);
      saveTodos();
    });

    deleteBtn.addEventListener('click', ()=>{
      todos.splice(index, 1);
      renderTodos();
      saveTodos();
    });
  });
}

function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(){
  const todoText = todoInput.value.trim();
  if(todoText === ''){
    alert('내용을 입력하세요!');
    return;
  }

  todos.push({
    text: todoText,
    completed: false
  });

  todoInput.value = '';
  renderTodos();
  saveTodos();
}

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', e => {
  if(e.key === 'Enter'){
    addTodo();
  }
});

window.onload = renderTodos;