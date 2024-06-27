import { toDo, main, createTaskContainer } from "./userInterface";
const displayProjectFormbtn = document.querySelector('.displayProjectForm') 
const projectsContainer = document.querySelector('.projects-container')
const projectTarget = document.querySelector('.projects-container') // to use event delegation


function createProjectForm() {   
    const projectDialog = document.createElement('dialog')
    projectDialog.classList.add('dialog-display')  

    const projectForm = document.createElement('form')
    projectForm.method = 'dialog'
    projectForm.action = " "
    projectForm.classList.add('project-form')  
    projectForm.id = "formId"        

    const projectNameInput = document.createElement('input')
    projectNameInput.id = 'projectName'    
    projectNameInput.type = 'text'
    projectNameInput.placeholder = ' Enter a name for your project'   
    

    const submitProjectName = document.createElement('button')
    submitProjectName.type = 'submit'    
    submitProjectName.textContent = 'Add'
    submitProjectName.classList.add('submitProject')
    submitProjectName.for = "formId"    

    const closeFormbtn = document.createElement('button')
    closeFormbtn.textContent = 'Close'
    closeFormbtn.type = 'button'
    closeFormbtn.classList.add('closeForm')
    
    projectForm.append(projectNameInput, submitProjectName, closeFormbtn)
    projectDialog.append(projectForm)

    return projectDialog    
    
}
const projectDialog = createProjectForm()

export function displayProjectFormOnClick() {
    displayProjectFormbtn.addEventListener("click", () => {
        projectsContainer.replaceChildren()
        projectsContainer.appendChild(projectDialog)
        projectDialog.showModal() 

    })
}

export function submitNewProject() {       
    projectTarget.addEventListener("click", (e) => {
        let btnTarget = e.target
        const selectDialog = document.querySelector('.dialog-display')         
        const selectForm = document.querySelector('.project-form')
        const inputValue = document.querySelector('#projectName')
        if (btnTarget.className === "submitProject") {         
            toDo.createProject(inputValue.value)                     
            selectForm.reset()
            selectDialog.close()
            displayProjectNameOnDOM()

        } else if (btnTarget.className === "closeForm") {
            selectDialog.close()    
        }
        
    })
}
function displayProjectNameOnDOM() {
    let listOfProjects = toDo.projects

    for (let i=0; i<listOfProjects.length; i++) {
        const projectDiv = document.createElement('div')
        projectsContainer.append(projectDiv)
        projectDiv.textContent = listOfProjects[i].name
        projectDiv.dataset.projectref = listOfProjects.indexOf(listOfProjects[i])
        projectDiv.style.marginBottom = "20px"
        projectsContainer.appendChild(projectDiv)        
        
        // display project details on DOM
        projectDiv.addEventListener("click", () => {
            createTaskContainer(listOfProjects[0]['task'])
        })
    }
    
}
