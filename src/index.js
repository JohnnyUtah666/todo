import "./style.css";
import { allTasks } from "./tasksTab";
import { allProjects } from "./projectsTab";
import { completedTasks } from "./completed";
import Paper from './notes.png';
import Stripes from './bullets.png';
const myPaper = new Image();
myPaper.src = Paper;
const myStripes = new Image();
myStripes.src = Stripes;
myPaper.setAttribute('id', 'myPaper');

let tasks = [];
let projects = [];

function createTask (name, dueDate, completed, notes) {
    return {name, dueDate, completed, notes};
}

function createProject (name, subTasks) {
    subTasks = [];
    return {name, subTasks};
}

function addTask (task) {
    tasks.push(task);
}

function addProject (project) {
    projects.push(project);
}

function addTaskToProject (project, task) {
    project.subTasks.push(task);
}

let firstProject = createProject("First Project");
let firstTask = createTask("first task", "10/31", 'yes', "just get it done, alright?");
let secondTask = createTask("secondTask", "10/29", 'no', "This is important too");

addTask(firstTask);
addTask(secondTask);

addTaskToProject(firstProject, firstTask)


console.log(firstProject);



    let sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBar');
    document.body.appendChild(sideBar);

            let sideBarHeader = document.createElement('div');
            sideBarHeader.setAttribute('id', 'sideBarHeader');
            sideBar.appendChild(sideBarHeader);

                let sideIcon = document.createElement('div');
                sideIcon.setAttribute('id', 'sideIcon');
                sideIcon.appendChild(myPaper);
                sideBarHeader.appendChild(sideIcon);
                

                

                let logo = document.createElement('div');
                logo.setAttribute('id', 'logo');
                sideBarHeader.appendChild(logo);
                logo.textContent = "Task'd"


            let tasksTab = document.createElement('button');
            tasksTab.setAttribute('id', 'tasksTab');
            tasksTab.setAttribute('class', 'tabs');
            sideBar.appendChild(tasksTab);
            tasksTab.textContent = "All Tasks";
            tasksTab.addEventListener('click', () => {
                allTasks();
            })

            let projectsTab = document.createElement('button');
            projectsTab.setAttribute('id', 'projectsTab');
            projectsTab.setAttribute('class', 'tabs')
            sideBar.appendChild(projectsTab);
            projectsTab.textContent = "Projects";
            projectsTab.addEventListener('click', () => {
                allProjects();
            })

            let completedTab = document.createElement('button');
            completedTab.setAttribute('id', 'completedTab');
            completedTab.setAttribute('class', 'tabs')
            sideBar.appendChild(completedTab);
            completedTab.textContent = "Completed Tasks"
            completedTab.addEventListener('click', () => {
                completedTasks();
            })

    let content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);

    allTasks();