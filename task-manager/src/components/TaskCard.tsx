
import type { TaskCardProps } from "../types/task";

export function TaskCard({id, title, description, completed, onToggleTask}: TaskCardProps) {
    return(
        <li style={{border: "1px solid"}}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Estado: {completed ? "tarea completada" : "tarea pendiente"}</p>
            <button onClick={() => onToggleTask(id)}>
                {completed ? "Desmarcar" : "Completar"}
            </button>
        </li>
    );
}