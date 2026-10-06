
import type { Task } from "../types/Task";
import { TaskCounter } from "../components/TaskCounter";
import { TaskList } from "../components/TaskList";
import { useState } from "react";

export function TaskManager() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Curso React", completed: false },
        { id: 2, title: "Revisar calendario", completed: false },
        { id: 3, title: "Ir a comprar", completed: false },
    ]);

    const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
        currentTasks.map((task) =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        )
    );
};

    return(
        <div>
            <TaskCounter tasks={tasks}/>
            <TaskList tasks={tasks}
            onToggleTask={toggleTask}
            />
        </div>
    );
}
