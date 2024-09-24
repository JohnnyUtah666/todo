import { addTask, createTask } from ".";
import { tasks } from ".";
import { projects } from ".";
import { createProject } from ".";
import { allProjects, displayProjects } from "./projectsTab";


const createModal = () => {
    let taskModal = document.createElement('dialog');
    taskModal.setAttribute('id', 'taskModal');
    document.body.appendChild(taskModal);
    
    let taskForm = document.createElement('form');
    taskForm.setAttribute('id', 'taskForm')

    let nameDiv = document.createElement('div');
    let taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    let nameLabel = document.createElement('label');
    nameLabel.setAttribute("for", 'taskName');
    nameLabel.innerHTML = "Task Name: ";
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(taskName);

    let dateDiv =document.createElement('div');
    let taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'taskDueDate');
    let dateLabel = document.createElement('label');
    dateLabel.setAttribute("for", 'taskDueDate');
    dateLabel.innerHTML = "Due Date: ";
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(taskDueDate);

    let radioWrap = document.createElement('div');
    radioWrap.setAttribute('id', 'radioWrap');
    let radioLabel = document.createElement('label');
    radioLabel.setAttribute("for", 'radioWrap');
    radioLabel.innerHTML = "Priority: ";
    radioWrap.appendChild(radioLabel);
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
        input.required = true;
        label.appendChild(input);
        radioWrap.appendChild(label);
        
        
        
    }
    

    
    let completedDiv = document.createElement('div');
    let isTaskCompleted = document.createElement('input');
    isTaskCompleted.setAttribute('type', 'checkbox');
    isTaskCompleted.setAttribute('id', 'isTaskCompleted');
    isTaskCompleted.setAttribute('required', true);
    isTaskCompleted.name = "completed";
    let completedLabel = document.createElement('label');
    completedLabel.setAttribute("for", 'isTaskCompleted');
    completedLabel.innerHTML = "Completed?: ";
    completedDiv.appendChild(completedLabel);
    completedDiv.appendChild(isTaskCompleted);
    
    let notesDiv = document.createElement('div');
    let taskNotes = document.createElement('input');
    taskNotes.setAttribute('type', 'textarea');
    taskNotes.setAttribute('rows', '5');
    taskNotes.setAttribute('id', 'taskNotes');
    let notesLabel = document.createElement('label');
    notesLabel.setAttribute("for", 'taskNotes');
    notesLabel.innerHTML = "Notes: ";
    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(taskNotes);

    let taskSubmitButton = document.createElement('button');
    taskSubmitButton.setAttribute('type', 'submit');
    taskSubmitButton.setAttribute('id', 'taskSubmitButton');
    taskSubmitButton.innerText = 'Create Task';


    taskForm.appendChild(nameDiv);
    taskForm.appendChild(dateDiv);
    taskForm.appendChild(radioWrap);
    taskForm.appendChild(completedDiv);
    taskForm.appendChild(notesDiv);
    taskForm.appendChild(taskSubmitButton);

    taskModal.appendChild(taskForm);


    let closeModalButton = document.createElement('button');
    closeModalButton.setAttribute('id', 'closeTaskModal');
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
      let printCompleted = isTaskCompleted.checked ? "Yes" : "No";
      console.log(printCompleted);
      let printNotes = taskNotes.value;

      let generatedTask = createTask(printName, printDate, printCompleted, printNotes, printPriority);
        addTask(generatedTask);  
        
        
    }
    
    taskSubmitButton.addEventListener('click', function(event) {
        
        event.preventDefault();
        submitTask();
        allTasks();
        displayAllTasks(tasks);
        taskForm.reset();
        taskModal.close();
        

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

    let taskDeleteButton = document.createElement('button');
            taskDeleteButton.setAttribute('id', 'taskDeleteButton');
            taskDeleteButton.textContent = "X";
            taskCard.appendChild(taskDeleteButton);



             const removeTaskFromProject = () => {
                let taskIndicator;
                for (let elem of projects) {
                    for (let subTask of elem.subTasks) {
                        if (subTask.name == item.name) {
                            elem.subTasks.splice(elem.subTasks.indexOf(subTask), 1);
                            return taskIndicator = true;
                        }
                    }
                }
            }

            taskDeleteButton.addEventListener("click", e => {
                e.stopPropagation();
                tasks.splice(tasks.indexOf(item), 1);
                removeTaskFromProject();

                document.getElementById("content").innerHTML = "";
                
                    allTasks();
                    displayAllTasks(tasks);
                
                
            })

    taskCard.appendChild(displayName);
    taskCard.appendChild(displayDueDate);
    taskCard.appendChild(displayPriority);
    taskCard.appendChild(displayCompleted);
    taskCard.appendChild(displayNotes);
    taskCard.appendChild(taskDeleteButton);

}
}

export {allTasks}
export {displayAllTasks}
export {newTask}