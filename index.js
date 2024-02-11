
const task = []

function addTask(taskText) {
    task.push({nameOfTask:taskText,completed:false});
}

function removeTask(index) {
    return task.splice(index,1)
}

function markedTask(index){
    task[index].completed = true
}
function sortTask(){
    return task.sort((a,b)=>a.nameOfTask.localeCompare(b.nameOfTask))
}

function IncompleteTask(){
    const result =  task.filter((item)=>item.completed === false)
    return result.length
}
 



addTask("Cleaning")
addTask("Cooking")
addTask("washing")
addTask("Eat")


markedTask(1)
sortTask()
console.log(task)
