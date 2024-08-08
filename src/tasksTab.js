import { addTask, createTask } from ".";
import { tasks } from ".";

const createModal = () => {
    let taskModal = document.createElement('dialog');
    document.body.appendChild(taskModal);
    
    let taskForm = document.createElement('form');
    taskForm.setAttribute('id', 'taskForm')

    let taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskname');

    let taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'taskDueDate');

    let radioWrap = document.createElement('div');
    radioWrap.setAttribute('id', 'radioWrap');
    const data = {
        "High": false,
        "Medium": false,
        "Low": false,
    }
    for (let key in data) {
        let label = document.createElement("label");
        label.innerText = key;
        let input = document.createElement('input');
        input.setAttribute('id', key);
        input.value = key;
        input.type = 'radio';
        input.name = 'priority'
        label.appendChild(input);
        radioWrap.appendChild(label);
        
    }
    

    

    let isTaskCompleted = document.createElement('input');
    isTaskCompleted.setAttribute('type', 'checkbox');
    isTaskCompleted.setAttribute('id', 'isTaskCompleted');

    let taskNotes = document.createElement('input');
    taskNotes.setAttribute('type', 'textarea');
    taskNotes.setAttribute('rows', '5');
    taskNotes.setAttribute('id', 'taskNotes');

    let taskSubmitButton = document.createElement('button');
    taskSubmitButton.setAttribute('type', 'submit');
    taskSubmitButton.setAttribute('id', 'taskSubmitButton');
    taskSubmitButton.innerText = 'Create Task';


    taskForm.appendChild(taskName);
    taskForm.appendChild(taskDueDate);
    taskForm.appendChild(radioWrap);
    taskForm.appendChild(isTaskCompleted);
    taskForm.appendChild(taskNotes);
    taskForm.appendChild(taskSubmitButton);

    taskModal.appendChild(taskForm);


    let closeModalButton = document.createElement('button');
    closeModalButton.textContent = 'X';
    closeModalButton.addEventListener('click', () => {
        taskModal.remove();
    });

    
    taskModal.appendChild(closeModalButton);
    taskModal.showModal()

    const submitTask = () => {
      let printName = taskName.value;
      let printDate = taskDueDate.value;
      let printPriority = document.querySelector('input[name="priority"]:checked').value;
      alert(printPriority);


        
        
        
            
        

       
    }
    
    taskSubmitButton.addEventListener('click', function(event) {
        submitTask();
        

    })
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