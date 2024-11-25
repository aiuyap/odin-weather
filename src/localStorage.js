import { getAllProjectList, addNewProjectToArr } from "./index";

export function syncStorage () {
    if(localStorage.length !== 0) {
        getFromStorage();
        return;
    }
    save();
}

function populateStorage () {
    const allProject = getAllProjectList();
    let projectNamesArr = [];

    allProject.forEach((project) => {
        const allTask = project.getTasks();
        localStorage.setItem(project.projName, JSON.stringify(allTask));
        projectNamesArr.push(project.projName);
    });
    localStorage.setItem("projKeys", JSON.stringify(projectNamesArr));
}

function getFromStorage() {
    const projKeys = JSON.parse(localStorage.getItem("projKeys"));
    for (let i = 0; i < localStorage.length - 1; i++) {
        addNewProjectToArr(projKeys[i]);
    }
    const projects = getAllProjectList();

    projects.forEach((project) => {
        const allTask = JSON.parse(localStorage.getItem(project.projName));
        if (allTask.length !== 0) {
            allTask.forEach((task) => {
                project.addTaskToProject(task);
            });
        }
    })
}

export function save() {
    localStorage.clear();
    populateStorage();
}