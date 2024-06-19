import { projectsManagement } from "./app";
import { main, toDo, submitFormBtn ,dialog, getTaskValues } from "./userInterface";
// import { title, description, dueDate, priority, form } from "./userInterface";

const submitEditForm = document.querySelector('.submitEditTask')

export function manageTask() {   
    
   main.addEventListener("click", (e) => {
    
    let element = e.target 
    let svgContainer = e.target.parentElement // get the parent element of svgs
    let taskContainer = svgContainer.parentElement // get taskref of the container
    let taskContainerRef =  taskContainer.dataset.taskref    
    let taskToEdit = toDo.inbox[taskContainerRef]
    
    if (element.className === 'delete-svg') {
        toDo.deleteTask(taskContainerRef)
        removeTaskFromDOM(taskContainer)
    } else if (element.className === 'edit-svg') {
        displayFormToEditTask(taskToEdit)
        saveEditedTask(taskContainerRef)
        


    } else console.log(toDo.inbox)
   })
}

function removeTaskFromDOM(taskToRemove) {
    main.removeChild(taskToRemove)
}
// display form to edit task and popualte it with
// values  of the task details
function displayFormToEditTask(selectedTask) {
    const currentValue = getTaskValues()
    
    submitEditForm.removeAttribute("hidden")
        submitFormBtn.replaceWith(submitEditForm)
        currentValue.title.value = selectedTask.title
        currentValue.description.value = selectedTask.description
        currentValue.priority.value = selectedTask.priority
        currentValue.dueDate.value = selectedTask.dueDate
        dialog.showModal()
}
function saveEditedTask(selectedTask) {
    submitEditForm.addEventListener("click", () => {
        toDo.editTask(selectedTask,
            title.value,
            description.value,
            dueDate.value,
            priority.value
        )
    })
}