import { createNewTask, getAllProjectList, addNewProjectToArr } from "./index";
import { save } from "./localStorage";

export function display(project) {
    const tasks = project.getTasks();
    const divTasksContainer = generateTitle(project.projName);
    generateAddTaskButton(divTasksContainer, project);
    tasks.forEach((task, index) => {
        generateTask(task, divTasksContainer, index, project);
    });
    
}

export function generateContentContainer() {
    const divContent = document.createElement("div");
    divContent.id = "content";
    document.body.appendChild(divContent);
}

function generateTitle(title) {
    const divContent = document.querySelector("#content");
    const divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divContent.appendChild(divTitle);

    const h1Title = document.createElement("h1");
    divTitle.appendChild(h1Title);
    h1Title.textContent = title;

    const divTasksContainer = document.createElement("div");
    divTasksContainer.classList.add("tasks-container");
    divContent.appendChild(divTasksContainer);

    return divTasksContainer;
}

function generateTask(task, divTasksContainer, index, project) {
    const card = document.createElement("div");
    card.classList.add("tasks-card");
    divTasksContainer.appendChild(card);

    const title = document.createElement("h3");
    title.classList.add("tasks-title");
    card.appendChild(title);
    title.textContent = task.title;

    const desc = document.createElement("div");
    const descP = document.createElement("p");
    desc.classList.add("tasks-desc");
    descP.classList.add("tasks-desc");
    card.appendChild(desc);
    desc.appendChild(descP);
    descP.textContent = task.description;

    const dueDate = document.createElement("div");
    dueDate.classList.add("tasks-due");
    card.appendChild(dueDate);
    dueDate.textContent = `Due: ${task.dueDate}`;

    const prio = document.createElement("div");
    prio.classList.add("tasks-prio");
    card.appendChild(prio);
    prio.textContent = task.priority;

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("tasks-complete");
    completeBtn.textContent = "Complete";
    card.appendChild(completeBtn);

    if(task.isComplete) {
        completeBtn.classList.add("tasks-done-btn");
        completeBtn.textContent = "Done! ✔";
    }

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("tasks-rmv");
    removeBtn.textContent = "Remove";
    card.appendChild(removeBtn);

// Rmv and complete btn event listener
    removeBtn.addEventListener("click", () => {
        //  removeTaskCard(card, index, project);
        const allTask = project.getTasks();
        allTask.forEach((t, i) => {
            if (t.title === task.title) {
                removeTaskCard(card, i, project);
            }
        });
    }); 

    completeBtn.addEventListener("click", () => {
        completeTask(task, completeBtn);
    });
}

function completeTask (task, completeBtn) {
    task.isComplete = true;
    completeBtn.disabled = true;
    completeBtn.classList.add("tasks-done-btn");
    completeBtn.textContent = "Done! ✔";
    save();
}

function removeTaskCard (card, index, project) {
    card.remove();
    project.removeTask(index);
    save();
};

export function clearContent () {
    document.querySelector("#content").remove();
}

function generateAddTaskButton (divTasksContainer, project) {
    const card = document.createElement("div");
    card.classList.add("tasks-card");
    card.id = "add-btn-card";
    divTasksContainer.appendChild(card);

    const addBtn = document.createElement("button");
    addBtn.textContent = "+ New Task";
    addBtn.id = "add-btn";
    card.appendChild(addBtn);

    addBtn.addEventListener("click", () => {
        document.querySelector("#add-task-dialog").showModal();
        addTaskListener(project);
    })
}

function addTaskListener (project) {
    document.querySelector("#add-task-form").onsubmit = () => {
        createNewTask(project);
        save();
    };
}

function addNewProject () {
    const projectName = document.querySelector("#new-project-name").value;
    addNewProjectToArr(projectName);
    clearContent();
    generateContentContainer();
    displayAllProjects();
}


(function addingEventListenerModule () {
    //Dialog rmv btn event listeners
    document.querySelector("#dialog-cancel-btn").addEventListener("click", () => {
        document.querySelector("#add-task-dialog").close();
    });
    document.querySelector("#project-cancel-btn").addEventListener("click", () => {
        document.querySelector("#add-project-dialog").close();
    })
    //Navbar event listeners
    document.querySelector("#view-projects").addEventListener("click", () => {
        clearContent();
        generateContentContainer();
        displayAllProjects ();
    });
    document.querySelector("#view-current-tasks").addEventListener("click", () => {
        clearContent();
        generateContentContainer();
        const allProjects = getAllProjectList();
        display(allProjects[0]);
    });
    document.querySelector("#add-project-form").onsubmit = function() {
        addNewProject();
        save();
    };
})();

function displayAllProjects () {
    const AllProjects = getAllProjectList();
    const divTasksContainer = generateTitle("All Projects");
    generateAddProjectButton(divTasksContainer);

    AllProjects.forEach((proj, index) => {
        generateProjectCards(divTasksContainer, proj, index, AllProjects);
    });
}

function generateAddProjectButton (divTasksContainer) {
    const card = document.createElement("div");
    card.classList.add("proj-card");
    divTasksContainer.appendChild(card);

    const addBtn = document.createElement("button");
    addBtn.textContent = "+ New Project";
    addBtn.id = "add-proj-btn";
    card.appendChild(addBtn);

    addBtn.addEventListener("click", () => {
        document.querySelector("#add-project-dialog").showModal();
    });
}

function generateProjectCards (divTasksContainer, proj, index, AllProjects) {
    const card = document.createElement("div");
    card.classList.add("proj-card");
    divTasksContainer.appendChild(card);

    const title = document.createElement("h3");
    title.classList.add("tasks-title");
    card.appendChild(title);
    title.textContent = proj.projName;

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View";
    card.appendChild(viewBtn);

    if (index !== 0) {
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        card.appendChild(removeBtn);

        //Rmv btn event listener
        removeBtn.addEventListener("click", function () {
            removeProject(card, AllProjects, proj);
        });
    }
    //View btn event listener
    viewBtn.addEventListener("click", () => {
        clearContent();
        generateContentContainer();
        display(proj);
    });
}

function removeProject (card, AllProjects, proj) {
    card.remove();
    AllProjects.forEach((project, i) => {
        if(project.projName === proj.projName) {
            AllProjects.splice(i, 1);
            save();
        }
    })
}
