
export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface TaskListProps {
    tasks: Task[];
    onToggleTask: (id: number) => void;
}

export interface TaskCardProps extends Task {
    onToggleTask: (id: number) => void;
}