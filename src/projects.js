import { submitFormBtn, toDo } from "./userInterface";
const displayProjectFormbtn = document.querySelector('.addProjectBtn') 
const projectsContainer = document.querySelector('.projects-container')


function createProjectForm() {   
    const projectDialog = document.createElement('dialog') 
    const projectForm = document.createElement('form')
    projectForm.method = 'dialog'
    const projectNameInput = document.createElement('input')
    projectNameInput.type = 'text'
    projectNameInput.placeholder = 'Enter a name for your project'
    const submitProejctName = document.createElement('button')
    submitFormBtn.type = 'submit'
    submitFormBtn.textContent = 'Add'
    const closeFormbtn = document.createElement('button')
    closeFormbtn.textContent = 'Close'

    projectForm.append(projectNameInput, submitFormBtn, closeFormbtn)
    projectDialog.append(projectForm)
    projectsContainer.append(projectForm)

    

}
export function displayProjectFormOnClick() {
    displayProjectFormbtn.addEventListener("click", () => {
        createProjectForm()
    })
}