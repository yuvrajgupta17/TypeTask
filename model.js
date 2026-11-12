"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTask(tasks, title) {
    const nextId = tasks.length === 0
        ? 1
        : Math.max(...tasks.map(t => t.id)) + 1;
    const newTask = {
        id: nextId,
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}
function completeTask(tasks, id) {
    return tasks.map(t => t.id === id
        ? { ...t, status: "done" }
        : t);
}
function filterByStatus(tasks, status) {
    return tasks.filter(t => t.status === status);
}
// Extra operation: Delete Task
function deleteTask(tasks, id) {
    return tasks.filter(t => t.id !== id);
}
//# sourceMappingURL=model.js.map