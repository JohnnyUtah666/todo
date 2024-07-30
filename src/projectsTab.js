const allProjects = () => {
    document.getElementById("content").innerHTML = "";
    let projectsHeader = document.createElement('div');
    projectsHeader.setAttribute('id', 'projectsHeader');
    projectsHeader.textContent = 'Projects'
    content.appendChild(projectsHeader);
}

export {allProjects}