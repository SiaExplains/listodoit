import React, { useState } from 'react';
import './App.css';
import Task from './components/task/task';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    palette: {
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    );
}

function App() {
    const [todos, setTodos] = useState([
        {
            title: 'Learn about React',
            isCompleted: false,
        },
        {
            title: 'Meet friend for lunch',
            isCompleted: false,
        },
        {
            title: 'Build really cool todo app',
            isCompleted: false,
        },
    ]);

    const addTodo = (title) => {
        const newTodos = [...todos, { title }];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='app'>
                <h1>listodoit </h1>
                <h5>an application for managing todo-list!</h5>
                <h6>version 1.0.0</h6>
                <div className='todo-list'>
                    {todos.map((todo, index) => (
                        <Task
                            key={index}
                            index={index}
                            task={todo}
                            doneHandler={completeTodo}
                            removeHandler={removeTodo}
                        />
                    ))}
                    <TodoForm addTodo={addTodo} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
