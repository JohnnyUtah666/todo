const allTasks = () => {
    document.getElementById("content").innerHTML = "";
    let tasksHeader = document.createElement('div');
    tasksHeader.setAttribute('id', 'tasksHeader');
    tasksHeader.textContent = 'All Tasks'
    content.appendChild(tasksHeader);
}

export {allTasks}