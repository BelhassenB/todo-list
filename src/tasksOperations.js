import { main, toDo, submitFormBtn ,dialog, getTaskValues, createTaskContainer } from "./userInterface";


const submitEditForm = document.querySelector('.submitEditTask')

export function manageTask() {   
    
   main.addEventListener("click", (e) => {        
    const element = e.target 
    const svgContainer = element.parentElement // get the parent element of svgs
    const taskContainer = svgContainer.parentElement // get taskref of the container
    const taskContainerRef =  taskContainer.dataset.taskref
    const taskToEdit = toDo.inbox[taskContainerRef]       

    if (element.className === 'delete-svg') {
        toDo.deleteTask(taskContainerRef)
        createTaskContainer(toDo.inbox)
        
        
    } else if (element.className === 'edit-svg') {
        displayFormToEditTask(taskToEdit)
        showEditBtnOnForm()
        saveEditedTask(taskContainerRef)  
           
  
    } else if (element.className === 'move-svg') {      
        displayMoveTaskForm(taskContainerRef) 
        
    } 
   })
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
function displayMoveTaskForm(getTaskRef) {
    const moveTaskDialog = document.createElement('dialog')
    moveTaskDialog.classList.add('moveTask-dialog')

    const moveTaskForm = document.createElement('form')
    moveTaskForm.method = 'dialog'

    const inputLabel = document.createElement('label')
    inputLabel.textContent = "Move task to this project: "
    
    const moveTaskBtn = document.createElement('button')
    moveTaskBtn.textContent = "Save"
    moveTaskBtn.classList.add('moveBtn')    
    
    const projectOptions = document.createElement('select')
   
    const defaultOption = document.createElement('option')
    defaultOption.value = "Please Choose a Project"
    defaultOption.textContent = defaultOption.value
    projectOptions.append(defaultOption)

    for (let i=0; i<toDo.projects.length; i++) {
        const createOption = document.createElement('option')
        createOption.value = toDo.projects[i].name
        createOption.textContent = createOption.value
        createOption.dataset.optionref = toDo.projects.indexOf(toDo.projects[i])
        projectOptions.append(createOption)
    }
    moveTaskForm.append(inputLabel, projectOptions, moveTaskBtn)
    moveTaskDialog.append(moveTaskForm)
    main.append(moveTaskDialog)

    moveTaskDialog.showModal()

     
    moveTaskBtn.addEventListener("click", () => {
        // e.preventDefault()
        const dropdownelement = document.querySelector('select')
        const getOptionInDropdown = dropdownelement[dropdownelement.selectedIndex]
        const getOptionIndex = getOptionInDropdown.dataset.optionref
        toDo.moveTask(getTaskRef, getOptionIndex)
        toDo.deleteTask(getTaskRef)
        createTaskContainer(toDo.inbox)
        
    })

}