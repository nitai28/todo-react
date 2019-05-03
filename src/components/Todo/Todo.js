import React from 'react';
import TodoList from '../TodoList/TodoList'
import './Todo.scss'

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todo: {
                content: '',
                createAt: null
            }
        }
    }

    handleChange = (e) => {
        let newTodo = {
            content: e.target.value,
            createAt: Date.now()
        }
        this.setState({todo: newTodo})
    }

    addTodo = (event) => {
        event.preventDefault();
        let newTodos = this.state.todos.slice();
        if (this.state.todo !== "")
            newTodos.push(this.state.todo);
        this.setState({todos: newTodos, todo: ""})
    };

    removeTodo = (createAt) => {
        let newTodos = this.state.todos.filter(todo => todo.createAt !== createAt);
        this.setState({todos: newTodos});
    }

    render() {
        return (
            <div className="Todo">
                <form onSubmit={this.addTodo} action="">
                    <div className="todo-header">
                        <span>TO-DO LIST</span>
                        <button className="add-btn" type="submit"><img  src="/img/plus.png" alt=""/></button>
                    </div>
                    <input className="inp-form" value={(this.state.todo.content) || ''} type="text" onChange={this.handleChange}
                           placeholder="Add New Todo "/>
                </form>
                <TodoList removeTodo={this.removeTodo} todos={this.state.todos}/>
            </div>
        );
    }
}
export default Todo;
