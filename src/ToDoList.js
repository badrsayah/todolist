import React, { useState } from 'react';

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        if (inputTask.trim() !== '') {
            setList([...list, { id: Math.random(), todo: inputTask.trim() }]);
            setInputTask('');
        }
    };

    const handleDeleteTodo = (id) => {
        setList(list.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container">
            <h1 className="title">My To-Do List</h1>
            <div className="input-container">
                <input
                    className="input"
                    type="text"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button className="btn" onClick={handleAddTodo}>
                    Add
                </button>
            </div>
            <ul className="todo-list">
                {list.map((todo) => (
                    <li className="todo-item" key={todo.id}>
                        {todo.todo}
                        <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

