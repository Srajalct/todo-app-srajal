// import React from 'react';

// import Style from './style.css';

// const App = () => {

//   return (
//     <div className={'mf2'}>
//       <h1>MF2 Application</h1>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Style from './style.css';

const tasks = [
  { name: "task1", completed: true },
  { name: "task2", completed: false },
  { name: "task3", completed: true },
  { name: "task4", completed: false },
];

<App tasks={tasks} />;

const App = () => {
  // Separate tasks into completed and pending categories
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="mf2">
      <h1>MF2 Application</h1>

      <div className="task-category">
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.length > 0 ? (
            completedTasks.map((task, index) => (
              <li key={index} className="task-item completed">
                {task.name}
              </li>
            ))
          ) : (
            <p>No tasks completed yet!</p>
          )}
        </ul>
      </div>

      <div className="task-category">
        <h2>Pending Tasks</h2>
        <ul>
          {pendingTasks.length > 0 ? (
            pendingTasks.map((task, index) => (
              <li key={index} className="task-item pending">
                {task.name}
              </li>
            ))
          ) : (
            <p>All tasks are completed!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
