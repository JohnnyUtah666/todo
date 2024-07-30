const completedTasks = () => {
    document.getElementById("content").innerHTML = "";
    let completedTasks = document.createElement('div');
    completedTasks.setAttribute('id', 'completedTasks');
    completedTasks.textContent = 'Completed Tasks'
    content.appendChild(completedTasks);
}

export {completedTasks}