const addToDb = id => {
    let todos = [];
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(storedTodos);
    if (storedTodos) {
        todos = [...storedTodos, id];
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}
const getstoredTodos = () => {
    let todos = [];

    //get the todos from local storage
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
    return todos;
}
const removeFromDb = title => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        const todos = JSON.parse(storedTodos);
        if (title in todos) {
            delete todos[title];
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }
}

const deletetodos = () => {
    localStorage.removeItem('todos');
}

export {
    addToDb,
    getstoredTodos,
    removeFromDb,
    deletetodos
}