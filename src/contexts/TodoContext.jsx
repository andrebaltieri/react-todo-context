import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Ir ao supermercado", done: false },
        { id: 2, title: "Ir para academia", done: false },
        { id: 3, title: "Passear com o cachorro", done: true },
    ]);

    const saveTodo = todo => {
        const newTodo = {
            id: todos.length + 1,
            title: todo.title,
            done: false
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <TodoContext.Provider value={{ todos, saveTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;