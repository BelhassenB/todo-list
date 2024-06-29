import { toDo, main, createTaskContainer } from "./userInterface"


export function storeUserTasks() {
    localStorage.setItem("userInbox", JSON.stringify(toDo.inbox) )
    
}
export function storeUserProejcts() {
    localStorage.setItem("userProjects", JSON.stringify(toDo.projects))
}

export function populateData() {
    document.addEventListener("DOMContentLoaded", () => {
        const parsedData = JSON.parse(localStorage.getItem("userInbox"))
        createTaskContainer(parsedData)
    })    
}