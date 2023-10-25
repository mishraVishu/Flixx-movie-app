const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(res => res.json())
        .then(data => {
            data.forEach((todo) => {
                addToDotoDOM(todo)
            })
        });
}

const addToDotoDOM=(todo)=>{
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('class', 'todo');
    div.setAttribute('data-id', todo.id);
    div.classList.add('normal');
    
    if (todo.completed) {
        div.classList.add('done');
    }

    document.getElementById('todo-list').appendChild(div);           
}

const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: true
    }
    
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => addToDotoDOM(data));
}

function updateTodo(id, completed) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data));
}

const toggleCompleted = (e) => {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');
    }
    updateTodo(e.target.dataset.id,e.target.classList.contains('done'))
}

const deleteToDos = (e) => {
    if (e.target.classList.contains('todo')) {
        fetch(`${apiUrl}/${e.target.dataset.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => e.target.remove());
    }
}

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick',deleteToDos)
}

init();