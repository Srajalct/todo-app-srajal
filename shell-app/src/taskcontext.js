import React, { createContext, useState } from 'react';

// Create the context
export const TaskContext = createContext();

// TaskProvider component to wrap your application
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTaskStatus = (taskName, completed) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.name === taskName ? { ...task, completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
