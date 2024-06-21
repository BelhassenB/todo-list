import { toDo, main } from "./userInterface";
const displayProjectFormbtn = document.querySelector('.displayProjectForm') 
const projectsContainer = document.querySelector('.projects-container')
const projectTarget = document.querySelector('.projects-container') // to use event delegation


function createProjectForm() {   
    const projectDialog = document.createElement('dialog')
    projectDialog.classList.add('dialog-display')
    
    const projectForm = document.createElement('form')
    // projectForm.method = 'dialog'
    // projectForm.action = ""
    projectForm.classList.add('project-form')
    

    const projectNameInput = document.createElement('input')
    projectNameInput.id = 'projectName'    
    projectNameInput.type = 'text'
    projectNameInput.placeholder = ' Enter a name for your project'
    

    const submitProjectName = document.createElement('button')
    submitProjectName.type = 'submit'    
    submitProjectName.textContent = 'Add'
    submitProjectName.classList.add('submitProject')
    

    const closeFormbtn = document.createElement('button')
    closeFormbtn.textContent = 'Close'

    
    projectForm.append(projectNameInput, submitProjectName, closeFormbtn)
    projectDialog.append(projectForm)
    projectsContainer.append(projectForm)

    projectDialog.show()
    
    
}
export function displayProjectFormOnClick() {
    displayProjectFormbtn.addEventListener("click", () => {
        createProjectForm() 
        //hide button to avoid user display another form       
        displayProjectFormbtn.setAttribute("hidden", true)

    })
}

export function submitNewProject() {
   
    projectTarget.addEventListener("click", (e) => {
        let btnTarget = e.target
        if (btnTarget.className === "submitProject") {
            const inputValue = document.querySelector('#projectName')
            toDo.createProject(inputValue.value)
            const selectDialog = document.querySelector('.dialog-display')
            selectDialog.close()
            displayProjectFormbtn.removeAttribute("hidden")

        }
    })
}
