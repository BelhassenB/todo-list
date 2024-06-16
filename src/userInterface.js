import { projectsManagement } from './app';
import EditTask from './img/edit-task.svg'
import DeleteTask from './img/delete-task.svg'
import MoveTask from './img/move-task.svg'

const body = document.querySelector('body')
const main = document.querySelector('.main')
const addTaskBtn = document.querySelector('.addTask')
const dialog = document.querySelector('dialog')
const submitFormBtn = document.querySelector('.submit')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const dueDate= document.querySelector('#dueDate')
const priority = document.querySelector('#priority')
const form = document.querySelector('form')

const toDo = projectsManagement()

export function displayTaskForm() {  
    addTaskBtn.addEventListener("click", () => {
        dialog.showModal()
    })
    
}
export function displayTaskOnClick() {
    submitFormBtn.addEventListener("click", () => {
        const taskCreated = toDo.createTask(title.value, description.value, dueDate.value, priority.value)
        displayInboxTasks(taskCreated)
        form.reset()

    })
}
function displayInboxTasks(task) {
    const newContainer = document.createElement('div')
    
    for (const property in task) {
        const taskDetail = document.createElement('div')
        taskDetail.style.fontWeight = "bold"
        taskDetail.textContent = task[property]
        newContainer.append(taskDetail)
    }
    const manageTask = document.createElement('div')
    manageTask.classList.add('svgDiv')
    manageTask.style.padding = "10px"
    manageTask.style.display = "flex"
    manageTask.style.justifyContent = "space-around"
    const editSvg = new Image(30,30)
    editSvg.src = EditTask
    editSvg.classList.add('editSvg-btn')
    const moveSvg = new Image(30,30)
    moveSvg.src = MoveTask
    moveSvg.classList.add('moveSvg-btn')
    const deleteSvg = new Image(30,30)
    deleteSvg.src = DeleteTask
    deleteSvg.classList.add('deleteSvg-btn')

    manageTask.append(editSvg)
    manageTask.append(moveSvg)
    manageTask.append(deleteSvg)

    newContainer.append(manageTask)
    main.append(newContainer)
}
