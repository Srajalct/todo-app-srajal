// import React from 'react';
// import AppFromMf1 from 'mf1/App';
// import AppFromMf2 from 'mf2/App';
// import Style from './style.css';

// const App = () => {

//   return (
//     <div>
//     <div className='shell'>
//       <h1>Shell Application</h1>
//     </div>
//     <AppFromMf1 />
//     <AppFromMf2 />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import AppFromMf1 from 'mf1/App';
// import AppFromMf2 from 'mf2/App';
// import TaskProvider from './TaskContext';

// import Styles from './style.css';


// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const handleUpdateTasks = (newTasks) => {
//     setTasks(newTasks); 
//   };

//   return (
//     <TaskProvider>
//     <div className="shell">
//       <h1>Shell Application</h1>
//       {/* MF1: Task Input/Management */}
//       <AppFromMf1 onUpdateTasks={handleUpdateTasks} />

//       {/* MF2: Task Status */}
//       <AppFromMf2 tasks={tasks} />
//     </div>
//     </TaskProvider>
//   );
// };

// export default App;


import React, { useState } from 'react';
import AppFromMf1 from 'mf1/App';
import AppFromMf2 from 'mf2/App';
import TaskProvider from './TaskContext';

import Styles from './style.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleUpdateTasks = (newTasks) => {
    setTasks(newTasks);
  };

  return (
    <TaskProvider>
      <div className="shell">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">Todo App</h1>
        </header>

        {/* Navigation Bar */}
        <nav className="app-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#mf1" className="nav-link">Task Management</a>
            </li>
            <li className="nav-item">
              <a href="#mf2" className="nav-link">Task Status</a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="app-content">
          {/* MF1: Task Input/Management */}
          <section id="mf1">
            <AppFromMf1 onUpdateTasks={handleUpdateTasks} />
          </section>

          {/* MF2: Task Status */}
          <section id="mf2">
            <AppFromMf2 tasks={tasks} />
          </section>
        </main>
      </div>
    </TaskProvider>
  );
};

export default App;
