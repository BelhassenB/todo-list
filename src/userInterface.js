import { projectsManagement } from "./app";

const addTaskBtn = document.querySelector('.addTask')
const dialog = document.querySelector('dialog')
const submitFormBtn = document.querySelector('.submit')
const toDo = projectsManagement()
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const dueDate= document.querySelector('#dueDate')
const priority = document.querySelector('#priority')



export function displayTaskForm() {  
    addTaskBtn.addEventListener("click", () => {
        dialog.showModal()
    })
    
}
export function submitTask() {
    submitFormBtn.addEventListener("click", () => {
        toDo.createTask(title.value, description.value, dueDate.value, priority.value)
        
        console.log(toDo.inbox)
    })
}