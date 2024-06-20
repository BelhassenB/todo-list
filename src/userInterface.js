import { projectsManagement } from './app';
import EditTask from './img/edit-task.svg'
import DeleteTask from './img/delete-task.svg'
import MoveTask from './img/move-task.svg'

export const main = document.querySelector('.main')
export const dialog = document.querySelector('dialog')
export const submitFormBtn = document.querySelector('.submit')
export const title = document.querySelector('#title')
export const description = document.querySelector('#description')
export const dueDate= document.querySelector('#dueDate')
export const priority = document.querySelector('#priority')
export const form = document.querySelector('form')
const addTaskBtn = document.querySelector('.addTask')


export const toDo = projectsManagement()

export function displayTaskForm() {  
    addTaskBtn.addEventListener("click", () => {
        form.reset()
        dialog.showModal()
    })
    
}
export function createNewTask() {
    toDo.createTask(title.value, description.value, dueDate.value, priority.value)
    form.reset()
}
export function displayTaskOnClick() {   
    submitFormBtn.addEventListener("click", () => {
        createNewTask()
        // main.replaceChildren() // emtpy the main div to avoid duplicate
        createTaskContainer(toDo.inbox)

    })
}
export function createTaskContainer(taskToDisplay) {
        main.replaceChildren()
    for (let i=0; i<taskToDisplay.length; i++) {
        const newContainer = document.createElement('div')
        newContainer.dataset.taskref = (toDo.inbox).indexOf(taskToDisplay[i])      
       
        main.append(newContainer) 

        for (const property in taskToDisplay[i]) {
            const taskDetail = document.createElement('div')
            taskDetail.style.fontWeight = "bold"
            taskDetail.textContent = taskToDisplay[i][property]
            newContainer.append(taskDetail) 
        }

        const iconsDiv = document.createElement('div')
        iconsDiv.classList.add('svgDiv')
        iconsDiv.style.padding = "10px"
        iconsDiv.style.display = "flex"
        iconsDiv.style.justifyContent = "space-around"
        newContainer.append(iconsDiv)

        const editSvg = new Image(30,30)
        editSvg.src = EditTask
        editSvg.classList.add('edit-svg')

        const moveSvg = new Image(30,30)
        moveSvg.src = MoveTask
        moveSvg.classList.add('move-svg')

        const deleteSvg = new Image(30,30)
        deleteSvg.src = DeleteTask
        deleteSvg.classList.add('delete-svg')

        iconsDiv.append(editSvg, moveSvg, deleteSvg)
    }
}
export function getTaskValues() {
    return {
        title,
        description,
        dueDate,
        priority,
        form
    }
}
