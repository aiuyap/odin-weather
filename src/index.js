import "./styles.css";
import { display, generateContentContainer, clearContent } from "./displayController";
import { save, syncStorage } from "./localStorage";

let projectList = [];


(function initialLoad () {
    if (localStorage.length === 0) {
        const defaultProject = Projects("Current Tasks");
        projectList.push(defaultProject);
    }
    syncStorage();
    generateContentContainer();
    display(projectList[0]);
})();

function Projects (projName) {
    const allTasks = [];

    function addTaskToProject (newTask) {
        allTasks.push(newTask);
    }

    function getTasks() {
        return allTasks;
    }

    function removeTask (index) {
        allTasks.splice(index, 1);
    }

    return {projName, addTaskToProject, getTasks, removeTask};
}

function Tasks (title, description, dueDate, priority, isComplete) {
    return {title, description, dueDate, priority, isComplete};
}

export function createNewTask (project) {
    const title = document.querySelector("#new-title").value;
    const desc = document.querySelector("#new-desc").value;
    const date = document.querySelector("#new-date").value;
    const prio = document.querySelector("#new-priority").value;

    const task = Tasks(title, desc, date, prio, false);
    project.addTaskToProject(task);

    clearContent();
    generateContentContainer();
    display(project);
}

export function getAllProjectList () {
    return projectList;
}

export function addNewProjectToArr(newProjName) {
    const newProject = Projects(newProjName);
    projectList.push(newProject);
}


