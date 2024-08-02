const createProjectModal = () => {
    let projectModal = document.createElement('dialog');
    document.body.appendChild(projectModal);
    let projectModalText = document.createTextNode("Here's the modal");

    let closeProjectModal = document.createElement('button');
    closeProjectModal.textContent = 'X';
    closeProjectModal.addEventListener('click', () => {
        projectModal.remove();
    });

    projectModal.appendChild(projectModalText);
    projectModal.appendChild(closeProjectModal);
    projectModal.showModal()
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

export {allProjects}