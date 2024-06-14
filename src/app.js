export function projectsManagement() {
    const inbox = []
    const projects = []    

    const createProject = (name) => {
        const newProject = {
            name,
        }
        projects.push(newProject)
        
        return newProject
    }

    function createTask(title, description, dueDate, priority) {
        const newTask = {
            title,
            description,
            dueDate,
            priority, 
            isComplete: false
        }       
               
        inbox.push(newTask)     
        return newTask 
    }   
    
    const editTask = 
    (index, key, newvalue) => inbox[index][key] = newvalue     

    const deleteTask = 
    (taskIndex, nbrOfTasksToRemove = 1 ) => inbox.splice(taskIndex, nbrOfTasksToRemove)

    const deleteAllTasks = 
    () => inbox.splice(0) 

    
    const moveTask = (startIndex, endIndex, targetProject) => {
        const taskToMove = inbox.slice(startIndex, endIndex)
        deleteTask(startIndex, endIndex )
        projects[targetProject].task = taskToMove              
        
    }
    
    return {createTask,
            deleteTask,
            editTask,
            createProject,
            moveTask,
            deleteAllTasks,
            inbox,
            projects
        }
}
//tasks examples
const grocery = toDo.createTask("Grocery", "buy milk", "tonight", "high")
const play = toDo.createTask("Games", "play gta20 and fifa2050", "tonight", "high")