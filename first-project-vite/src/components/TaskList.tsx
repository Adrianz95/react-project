
import type { TaskListProps } from "../types/Task";

export function TaskList({tasks, onToggleTask}: TaskListProps) {

    return (
      <ul>
        <h2> Lista de tareas:</h2>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - Estado:{" "}
            <span>{task.completed ? "Completada" : "Pendiente"}</span>
            <button onClick={() => onToggleTask(task.id)}>
              {task.completed ? "Desmarcar" : "Completar"}
            </button>
          </li>
        ))}
      </ul>
    );
}