import {projects} from "./index.js";
import { displayAllTasks } from "./tasksTab.js";
import { createProject } from "./index.js";
import { addProject } from "./index.js";

const createProjectModal = () => {
    let projectModal = document.createElement('dialog');
    document.body.appendChild(projectModal);
    
    let newProjectName = document.createElement('input');
    newProjectName.setAttribute('type', 'text');
    newProjectName.setAttribute('id', 'newProjectName');

    let submitProjectButton= document.createElement('button');
    submitProjectButton.setAttribute('type', 'submit');
    submitProjectButton.setAttribute('id', 'submitProjectButton');
    submitProjectButton.innerText = "Create Project";


    let closeProjectModal = document.createElement('button');
    closeProjectModal.textContent = 'X';
    closeProjectModal.addEventListener('click', () => {
        projectModal.remove();
    });

    projectModal.appendChild(newProjectName);
    projectModal.appendChild(submitProjectButton);
    projectModal.appendChild(closeProjectModal);
    projectModal.showModal()

    submitProjectButton.addEventListener('click', (event) => {
        event.preventDefault();
        allProjects();
        let generatedProject = createProject(newProjectName.value, "");
        addProject(generatedProject);
        displayProjects(projects);
        projectModal.close();
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

        projectCard.addEventListener('click', () => {
            document.getElementById("content").innerHTML = "";

            let viewProjectHeader = document.createElement('div');
            viewProjectHeader.setAttribute('id', 'viewProjectHeader');
            viewProjectHeader.textContent = item.name;
            content.appendChild(viewProjectHeader);

            let addSubTaskToProjectButton = document.createElement('button');
            addSubTaskToProjectButton.setAttribute('id', 'addSubTaskToProjectButton');
            addSubTaskToProjectButton.innerText = "Add Task";
            content.appendChild(addSubTaskToProjectButton);
                addSubTaskToProjectButton.addEventListener("click", () => {
                    alert("You have clicked the button");
                })

            let backButton = document.createElement('button');
            backButton.setAttribute('id', 'backButton');
            backButton.textContent = "Back";
            content.appendChild(backButton);
                backButton.addEventListener("click", () => {
                    allProjects();
                    displayProjects(projects);
                })
            
            displayAllTasks(item.subTasks);
        })
    }
}

export {allProjects}
export {displayProjects}