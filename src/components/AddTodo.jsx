import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
    const { saveTodo } = useContext(TodoContext);
    const [todo, setTodo] = useState();

    const handleFormData = e => {
        setTodo({
            ...todo,
            [e.target.id]: e.target.value
        });
    }

    const addNewTodo = e => {
        e.preventDefault();
        saveTodo(todo);
    }

    return (
        <form onSubmit={addNewTodo}>
            <input type="text" id="title" placeholder="Title" onChange={handleFormData} />
            <button>Save</button>
        </form>
    );
}

export default AddTodo;