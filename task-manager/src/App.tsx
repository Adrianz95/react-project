
import { useState } from 'react';
import './App.css'
import type { Task } from './types/task';
import { TaskList } from './components/TaskList';

function App() {
  const [task, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Estudiar React",
      description: "Repasar componentes y props",
      completed: false,
    },
    {
      id: 2,
      title: "Practicar TypeScritp",
      description: "Crear interfaces",
      completed: true,
    }
  ])

  const toggleTask = (id: number) => {
    setTask((currentTasks) => 
    currentTasks.map((task) =>
    task.id === id
    ? {...task, completed: !task.completed}
    : task
  )
  );
  };

  return(
    <div>
      <TaskList 
      tasks={task}
      onToggleTask={toggleTask}
      />
    </div>
  );
}

export default App
