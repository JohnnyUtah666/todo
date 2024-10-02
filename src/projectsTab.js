import {addTask, projects} from "./index.js";
import { displayAllTasks } from "./tasksTab.js";
import { createProject } from "./index.js";
import { addProject } from "./index.js";
import { addTaskToProject } from "./index.js";
import { createTask } from "./index.js";
import { tasks } from "./index.js";



const createProjectModal = () => {
    let projectModal = document.createElement('dialog');
    projectModal.setAttribute('id', 'projectModal')
    document.body.appendChild(projectModal);
    
    let nameDiv = document.createElement('div');
    let newProjectName = document.createElement('input');
    newProjectName.setAttribute('type', 'text');
    newProjectName.setAttribute('id', 'newProjectName');
    let projectNameLabel = document.createElement('label');
    projectNameLabel.setAttribute('for', 'newProjectName');
    projectNameLabel.innerHTML = "Project Name: "

    let submitProjectButton= document.createElement('button');
    submitProjectButton.setAttribute('type', 'submit');
    submitProjectButton.setAttribute('id', 'submitProjectButton');
    submitProjectButton.innerText = "Create Project";


    let closeProjectModal = document.createElement('button');
    closeProjectModal.setAttribute('id', 'closeProjectModalButton');
    closeProjectModal.textContent = 'X';
    closeProjectModal.addEventListener('click', () => {
        projectModal.remove();
    });

    nameDiv.appendChild(projectNameLabel);
    nameDiv.appendChild(newProjectName);
    projectModal.appendChild(nameDiv);
    projectModal.appendChild(submitProjectButton);
    projectModal.appendChild(closeProjectModal);
    projectModal.showModal()

    submitProjectButton.addEventListener('click', (event) => {
        event.preventDefault();
        allProjects();
        let generatedProject = createProject(newProjectName.value, "");
        addProject(generatedProject);
        displayProjects(projects);
        projectModal.remove();
    });
}

const newProject = () => {
    createProjectModal();
}

const allProjects = () => {
    document.getElementById("content").innerHTML = "";
    let projectsHeader = document.createElement('div');
    projectsHeader.setAttribute('id', 'projectsHeader');
    projectsHeader.textContent = 'Projects'
    content.appendChild(projectsHeader);

    let newProjectButton = document.createElement('button');
    newProjectButton.setAttribute('id', 'newProjectButton');
    newProjectButton.textContent = "+ New Project";
    content.appendChild(newProjectButton);
    newProjectButton.addEventListener('click', () => {
        newProject();
    })

}

const displayProjects = (array) => {
    for (let item of array) {
        let projectCard = document.createElement('div');
        projectCard.setAttribute('id', 'projectCard');
        content.appendChild(projectCard);

        let displayProjectName = document.createElement('div');
        displayProjectName.innerText = item.name;
        displayProjectName.setAttribute('id', 'displayProjectName');
        projectCard.appendChild(displayProjectName);

        let projectDeleteButton = document.createElement('button');
            projectDeleteButton.setAttribute('id', 'projectDeleteButton');
            projectDeleteButton.textContent = "X";
            projectCard.appendChild(projectDeleteButton);

            projectDeleteButton.addEventListener("click", e => {
                e.stopPropagation();
                projects.splice(projects.indexOf(item), 1);
                document.getElementById("content").innerHTML = "";
                allProjects();
                displayProjects(projects);
            })

           const makeProjectCardButtons = () => {
            let addSubTaskToProjectButton = document.createElement('button');
            addSubTaskToProjectButton.setAttribute('id', 'addSubTaskToProjectButton');
            addSubTaskToProjectButton.innerText = "Add Task";
            content.appendChild(addSubTaskToProjectButton);
                addSubTaskToProjectButton.addEventListener("click", () => {
                    const createModal = () => {
                        let taskModal = document.createElement('dialog');
                        taskModal.setAttribute('id', 'taskModal');
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
                            input.required = true;
                            label.appendChild(input);
                            radioWrap.appendChild(label);
                            }
                        
                        let isTaskCompleted = document.createElement('input');
                        isTaskCompleted.setAttribute('type', 'checkbox');
                        isTaskCompleted.setAttribute('id', 'isTaskCompleted');
                        isTaskCompleted.setAttribute('required', true);
                        isTaskCompleted.name = "completed";
                        
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
                          let printCompleted = isTaskCompleted.checked ? "Yes" : "No";
                          let printNotes = taskNotes.value;
                    
                          let generatedTask = createTask(printName, printDate, printCompleted, printNotes, printPriority);
                            addTaskToProject(item ,generatedTask);  
                            addTask(generatedTask);    
                        }
                        
                        taskSubmitButton.addEventListener('click', function(event) {
                            
                            event.preventDefault();
                            submitTask();
                            document.getElementById("content").innerHTML = "";

                            let viewProjectHeader = document.createElement('div');
                             viewProjectHeader.setAttribute('id', 'viewProjectHeader');
                            viewProjectHeader.textContent = item.name;
                            content.appendChild(viewProjectHeader);
                            makeProjectCardButtons();
                            taskForm.reset();
                            taskModal.remove();
                            
                    
                        })
                    }
                    createModal();
                })

            let backButton = document.createElement('button');
            backButton.setAttribute('id', 'backButton');
            backButton.textContent = "Back";
            content.appendChild(backButton);
                backButton.addEventListener("click", () => {
                    allProjects();
                    displayProjects(projects);
                })



                const displaySubTasks = (array) => {
        
    
    
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
                                
                                    projectCardGuts();
                                
                                
                            })
                
                    taskCard.appendChild(displayName);
                    taskCard.appendChild(displayDueDate);
                    taskCard.appendChild(displayPriority);
                    taskCard.appendChild(displayCompleted);
                    taskCard.appendChild(displayNotes);
                    taskCard.appendChild(taskDeleteButton);
                
                }
                }



            
            displaySubTasks(item.subTasks);
           }
           
            const projectCardGuts = () => {
                document.getElementById("content").innerHTML = "";

            let viewProjectHeader = document.createElement('div');
            viewProjectHeader.setAttribute('id', 'viewProjectHeader');
            viewProjectHeader.textContent = item.name;
            content.appendChild(viewProjectHeader);
            makeProjectCardButtons();

            
            }

        projectCard.addEventListener('click', () => {
            projectCardGuts();
        })
    }
}

export {allProjects}
export {displayProjects}