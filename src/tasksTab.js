const allTasks = () => {
    document.getElementById("content").innerHTML = "";
    let tasksHeader = document.createElement('div');
    tasksHeader.setAttribute('id', 'tasksHeader');
    tasksHeader.textContent = 'All Tasks'
    content.appendChild(tasksHeader);

    let newTaskButton = document.createElement('button');
    newTaskButton.setAttribute('id', 'newTaskButton');
    newTaskButton.textContent = "+ New Task";
    content.appendChild(newTaskButton);

        const addTask = () => {
            
        }
}

export {allTasks}