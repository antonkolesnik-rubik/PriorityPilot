function addTask(taskText) {
    // Додавання завдання
}


function deleteTask(taskId) {
    // Видалення завдання
}


function toggleTaskStatus(taskId) {
    // Зміна статусу завдання
}


function saveTasksToLocalStorage(tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
}


function loadTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem('tasks');
    return JSON.parse(tasksJSON) || [];
}