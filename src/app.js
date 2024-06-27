import { description, dueDate, priority } from "./userInterface"

export function projectsManagement() {
    const inbox = [{title:"Study",
        description: "learn JS",
        dueDate: "",
        priority: "low"}]

    const projects = []  

    const createProject = (name) => {
        const newProject = {
            name,  
            task: []  
        }
        projects.push(newProject)
        
        return newProject
    }

    const createTask = (title, description, dueDate, priority) => {
        const newTask = {
            title,
            description,
            dueDate,
            priority,
        }       
               
        inbox.push(newTask)     
        return newTask 
    }   
    
    const editTask = 
    (index, newTitle, newDescritpion, newDueDate, newPriority) => {
        inbox[index].title = newTitle
        inbox[index].description = newDescritpion
        inbox[index].dueDate = newDueDate
        inbox[index].priority = newPriority

    }  

    const deleteTask = 
    (taskIndex, nbrOfTasksToRemove = 1 ) => inbox.splice(taskIndex, nbrOfTasksToRemove)

    // const deleteAllTasks = 
    // () => inbox.splice(0) 
    
    const moveTask = (startIndex, targetProject, endIndex = startIndex + 1) => {
        
        const taskToMove = inbox.slice(startIndex, endIndex)
        projects[targetProject].task = taskToMove       
        
    }
    
    return {createTask,
            deleteTask,
            editTask,
            createProject,
            moveTask,
            inbox,
            projects
        }
}