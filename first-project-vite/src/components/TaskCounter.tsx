
import type { TaskCounterProps } from "../types/Task";

export function TaskCounter({tasks}: TaskCounterProps) {
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  return(
    <div>
      <h2>Tareas pentiendes: {pendingTasks} de {tasks.length}</h2>
    </div>
  );
}