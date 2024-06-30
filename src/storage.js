import { toDo, createTaskContainer } from "./userInterface"
import { displayProjectNameOnDOM } from "./projects"


function storeUserTasks() {      
    localStorage.setItem("userTasks", JSON.stringify(toDo.inbox))
}
function storeUserProjects() {
    localStorage.setItem("userProjects", JSON.stringify(toDo.projects))
}
export function storeData() {
    window.addEventListener("beforeunload", () => {
        storeUserTasks()
        storeUserProjects()
    })
}

export function populateTasks () {
   document.addEventListener("DOMContentLoaded", () => {
    const getTasksLocalStorage = localStorage.getItem("userTasks")
        

    if (getTasksLocalStorage) {
        const parseUserTasks = JSON.parse(getTasksLocalStorage)
        for (let i=0; i<parseUserTasks.length; i++) {
            toDo.inbox.push(parseUserTasks[i])
            createTaskContainer(toDo.inbox)
        }
    }
    })
}
export function populateProjects() {
    document.addEventListener("DOMContentLoaded", () => {
        const getProjectFromLocalStorage = localStorage.getItem("userProjects")        

        if (getProjectFromLocalStorage) {
            const parseUserProjects = JSON.parse(getProjectFromLocalStorage)  
            for (let i=0; i<parseUserProjects.length; i++) {
                toDo.projects.push(parseUserProjects[i])
                displayProjectNameOnDOM()
            }
        }
    })
}
