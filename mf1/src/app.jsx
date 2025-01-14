// import React from 'react';
// import AppFromMf2 from 'mf2/App';
// import Style from './style.css';

// const App = () => {

//   return (
//     <div>
//     <div className={'mf1'}>
//       <h1>MF1 Application</h1>
//     </div>
//     <AppFromMf2 />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import AppFromMf2 from 'mf2/App';
import Style from './style.css';

const App = () => {
  const [tasks, setTasks] = useState(['task1', 'task2', 'task3', 'task4']);
  const [resultsFetched, setResultsFetched] = useState(false);

  const handleGetResults = () => {
    setResultsFetched(true);
  };

  return (
    <div>
    <div className="container">
      {/* Microservice 1 Section */}
      <div className="mf1">
        <h1>TODO App - MF1</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
            </li>
          ))}
        </ul>
        <button className="get-results-btn" onClick={handleGetResults}>
          Get Results
        </button>
      </div>

      {/* Microservice 2 Section */}
      <div className="mf2">
        {resultsFetched ? (
          <AppFromMf2 tasks={tasks} />
        ) : (
          <p>Please fetch results to see task statuses.</p>
        )}
      </div>
    </div>
    <AppFromMf2 />
    </div>
  );
};

export default App;
