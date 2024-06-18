import { projectsManagement } from "./app";
import { main, toDo, dialog } from "./userInterface";

export function manageTask() {   
    
   main.addEventListener("click", (e) => {
    
    let element = e.target 
    let svgContainer = e.target.parentElement // get the parent element of svgs
    let taskContainer = svgContainer.parentElement // get taskref of the container
    let taskContainerRef =  taskContainer.dataset.taskref    
    
    if (element.className === 'delete-svg') {
        toDo.deleteTask(taskContainerRef)
        removeTaskFromDOM(taskContainer)
    } else if (element.className === 'edit-svg') {
        console.log('test')

    } else console.log(toDo.inbox)
   })
}

function removeTaskFromDOM(taskToRemove) {
    main.removeChild(taskToRemove)
}
function editTaskfromDOM() {

}