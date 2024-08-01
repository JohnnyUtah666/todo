const createModal = () => {
    let taskModal = document.createElement('dialog');
    document.body.appendChild(taskModal);
    let modalText = document.createTextNode("Here's the modal");

    let closeModalButton = document.createElement('button');
    closeModalButton.textContent = 'X';
    closeModalButton.addEventListener('click', () => {
        taskModal.remove();
    });

    taskModal.appendChild(modalText);
    taskModal.appendChild(closeModalButton);
    taskModal.showModal()
}

const newTask = () => {
    createModal();
}

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
    newTaskButton.addEventListener('click', () => {
        newTask();
    })
}


const displayAllTasks = (array) => {
        
    
    
    for (let item of array) {
    let taskCard = document.createElement('div');
    taskCard.setAttribute('id', 'taskCard');
    content.appendChild(taskCard);

    let displayName = document.createElement('div');
    let displayDueDate = document.createElement('div');
    let displayPriority = document.createElement('div');
    let displayCompleted = document.createElement('div');
    let displayNotes = document.createElement('div');

    displayName.setAttribute('id', 'displayName');
    displayDueDate.setAttribute('id', 'displayDueDate');
    displayPriority.setAttribute('id', 'displayPriority');
    displayCompleted.setAttribute('id', 'displayCompleted');
    displayNotes.setAttribute('id', 'displayNotes');

    let displayNameContent = document.createTextNode(item.name);
    let displayDueDateContent = document.createTextNode(item.dueDate);
    let displayPriorityContent = document.createTextNode(item.priority);
    let displayCompletedContent = document.createTextNode(item.completed);
    let displayNotesContent = document.createTextNode(item.notes);

    displayName.appendChild(displayNameContent);
    displayDueDate.appendChild(displayDueDateContent);
    displayPriority.appendChild(displayPriorityContent);
    displayCompleted.appendChild(displayCompletedContent);
    displayNotes.appendChild(displayNotesContent);

    taskCard.appendChild(displayName);
    taskCard.appendChild(displayDueDate);
    taskCard.appendChild(displayPriority);
    taskCard.appendChild(displayCompleted);
    taskCard.appendChild(displayNotes);

}
}

export {allTasks}
export {displayAllTasks}
export {newTask}