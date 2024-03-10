import { useState } from 'react';
import Head from 'next/head';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (taskInput.trim() === '') return;
        setTasks([...tasks, { text: taskInput, completed: false }]);
        setTaskInput('');
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) => {
        if (i === index) {
            return { ...task, completed: !task.completed };
        }
        return task;
        });
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <Head>
            <title>To-Do List</title>
        </Head>

        <div className="w-1/4 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4">TO-DO LIST</h1>
            
            {/* Add Task Input */}
            <div className="w-full flex mb-4">
                <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="flex-1 shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                placeholder="Add a task"
                />
                <button
                onClick={addTask}
                className="ml-2 flex-no-shrink p-2 rounded text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:shadow-outline"
                >
                Add
                </button>
            </div>
            
            {/* Task List */}
            <div className="w-full h-64 overflow-auto">
                <ul className="list-reset">
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center bg-gray-100 px-4 py-2 rounded my-2 shadow">
                    <input
                        type="checkbox"
                        className="mr-4"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(index)}
                    />
                    <span className={`flex-1 text-grey-darker ${task.completed ? 'line-through text-gray-400' : ''}`}>
                        {task.text}
                    </span>
                    <button
                        onClick={() => deleteTask(index)}
                        className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                        Delete
                    </button>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
}