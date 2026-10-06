
export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export interface TaskCounterProps {
    tasks: Task[];
}

export interface TaskListProps {
    tasks: Task[];
    onToggleTask: (id: number) => void;
}
