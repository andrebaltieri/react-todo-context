import React from 'react';

import TodoProvider from '../contexts/TodoContext';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
    return (
        <TodoProvider>
            <TodoList></TodoList>
            <AddTodo></AddTodo>
        </TodoProvider>
    );
}

export default App;