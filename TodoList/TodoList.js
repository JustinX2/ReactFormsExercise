import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList(){
    const [todos, setTodos]=useState([]);

    const addTodo=(newTodo)=>{
        setTodos(todos=>[...todos, newTodo]);
    };

    const removeTodo=(id)=>{
        setTodos(todos=>todos.filter(todo=>todo.id!==id));
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(({id, task})=>(
                <Todo key={id} id={id} task={task} removeTodo={removeTodo} />
            ))}
        </div>
    );
};

export default TodoList;