type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

function addTask(tasks: Task[], title: string): Task[] {

    const nextId = tasks.length === 0
        ? 1
        : Math.max(...tasks.map(t => t.id)) + 1;

    const newTask: Task = {
        id: nextId,
        title: title,
        status: "todo"
    };

    return [...tasks, newTask];
}


function completeTask(tasks: Task[], id: number): Task[] {

    return tasks.map(t =>
        t.id === id
            ? { ...t, status: "done" }
            : t
    );
}


function filterByStatus(
    tasks: Task[],
    status: TaskStatus
): Task[] {

    return tasks.filter(t => t.status === status);
}


// Extra operation: Delete Task

function deleteTask(tasks: Task[], id: number): Task[] {

    return tasks.filter(t => t.id !== id);
}