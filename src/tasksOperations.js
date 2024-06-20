import { projectsManagement } from "./app";
import { main, toDo, submitFormBtn ,dialog, getTaskValues, createTaskContainer } from "./userInterface";


const submitEditForm = document.querySelector('.submitEditTask')

export function manageTask() {   
    
   main.addEventListener("click", (e) => {       
    const element = e.target 
    const svgContainer = e.target.parentElement // get the parent element of svgs
    const taskContainer = svgContainer.parentElement // get taskref of the container
    const taskContainerRef =  taskContainer.dataset.taskref    
    const taskToEdit = toDo.inbox[taskContainerRef]   
    

    if (element.className === 'delete-svg') {
        toDo.deleteTask(taskContainerRef)
        removeTaskFromDOM(taskContainer)
    } else if (element.className === 'edit-svg') {
        displayFormToEditTask(taskToEdit)
        showEditBtnOnForm()
        saveEditedTask(taskContainerRef)       
  
    } else console.log(toDo.inbox)
   })
}

function removeTaskFromDOM(taskToRemove) {
    main.removeChild(taskToRemove)
    createTaskContainer(toDo.inbox) // to reset to tak ref according to inbox positions

}

// display form to edit task and popualte it with
// values  of the task details
function displayFormToEditTask(selectedTask) {
    const currentValue = getTaskValues()
    
    currentValue.title.value = selectedTask.title
    currentValue.description.value = selectedTask.description
    currentValue.priority.value = selectedTask.priority
    currentValue.dueDate.value = selectedTask.dueDate
    dialog.showModal()
}
function showEditBtnOnForm() {
    submitEditForm.removeAttribute("hidden")
    submitFormBtn.replaceWith(submitEditForm)
}
function hideEditBtnOnForm() {
    submitEditForm.setAttribute("hidden", true)
    submitEditForm.replaceWith(submitFormBtn)
}

function saveEditedTask(selectedTask) {
    
    submitEditForm.addEventListener("click", () => {
        toDo.editTask(selectedTask,
            title.value,
            description.value,
            dueDate.value,
            priority.value
        )
        hideEditBtnOnForm()
        createTaskContainer(toDo.inbox)
        dialog.close()

    })
}