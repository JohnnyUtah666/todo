import { tasks } from ".";

const completedTasks = () => {
    document.getElementById("content").innerHTML = "";
    let completedTasks = document.createElement('div');
    completedTasks.setAttribute('id', 'completedTasksHeader');
    completedTasks.textContent = 'Completed Tasks'
    content.appendChild(completedTasks);


}

const displayCompletedTasks = (array) => {
        
    
    
    for (let item of array) {

    if (item.completed.toLowerCase() == 'yes') { 
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

    
    } else {
        return null;
    }
}
}

export {completedTasks}
export {displayCompletedTasks}