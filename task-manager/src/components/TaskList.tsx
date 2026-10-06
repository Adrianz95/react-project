
import type { TaskListProps } from "../types/task";
import { TaskCard } from "./TaskCard";

export function TaskList({tasks, onToggleTask}: TaskListProps) {
    return(
        <ul>
            {tasks.map((task) => (
                <TaskCard 
                key={task.id}
                id={task.id}
                title={task.title} 
                description={task.description} 
                completed={task.completed}
                onToggleTask={onToggleTask}
                />
            ))}
        </ul>
    );
}