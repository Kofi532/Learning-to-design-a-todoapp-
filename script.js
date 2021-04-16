const todoItem = document.querySelector('#todo-item');
const addTodoItem = document.querySelector('.btn');
const allItems = document.querySelector ('.list-group');
const errorMsg = document.querySelector('.alert');

addTodoItem.addEventListener('click', addItem);

function addItem (e){
    e.preventDefault();
    
    if (todoItem.value === ''){
        errorMsg.classList.add('alert');
        errorMsg.innerHTML = 'Enter task to add';
        errorMsg.style.display = 'block';
        setTimeout(() => errorMsg.remove(), 2000);
    }


    
        else{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${todoItem.value}`));
            li.classList.add('list-group-item');
            allItems.appendChild(li);
        
            todoItem.value = '';

        }
    


}















9