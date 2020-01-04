import React, { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const context = useContext(TodoContext);

    const data = context.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
    ));

    return (
        <div>
            {data}
        </div>
    );
}

export default TodoList;