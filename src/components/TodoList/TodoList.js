import React from 'react';
import "./TodoList.scss"


const TodoList = (props) => {

    const todos = props.todos.map(todo =>
        <li key={todo.createAt}>
            <span className="delete-btn btn" onClick={() => props.removeTodo(todo.createAt)}><img src="/img/trash.png" alt=""/></span>
            {todo.content}
        </li>
    );
    return (
        <div>
            <ul>
                {todos}
            </ul>
        </div>
    );


};


export default TodoList;