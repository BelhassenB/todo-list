import './style.css'
import { displayTaskForm, displayTaskOnClick, 
    displayInobxTasksOnClick, displayHighPriorityTasks, todaytasks } from './userInterface'
import { manageTask } from './tasksOperations'
import { displayProjectFormOnClick, submitNewProject } from './projects'
import { populateProjects, populateTasks, storeData } from './storage'


displayInobxTasksOnClick()
displayTaskForm()
displayTaskOnClick()
manageTask()
displayProjectFormOnClick()
submitNewProject()
storeData()
populateProjects()
populateTasks()
displayHighPriorityTasks()
todaytasks()