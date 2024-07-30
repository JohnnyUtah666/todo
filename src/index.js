import "./style.css";
import Paper from './notes.png';
import Stripes from './bullets.png';
const myPaper = new Image();
myPaper.src = Paper;
const myStripes = new Image();
myStripes.src = Stripes;
myPaper.setAttribute('id', 'myPaper');

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

            let projectsTab = document.createElement('button');
            projectsTab.setAttribute('id', 'projectsTab');
            projectsTab.setAttribute('class', 'tabs')
            sideBar.appendChild(projectsTab);
            projectsTab.textContent = "Projects";

            let completedTab = document.createElement('button');
            completedTab.setAttribute('id', 'completedTab');
            completedTab.setAttribute('class', 'tabs')
            sideBar.appendChild(completedTab);
            completedTab.textContent = "Completed Tasks"

    let content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);