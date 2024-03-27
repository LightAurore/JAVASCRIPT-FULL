import { useState } from "react";
import DisplayList from "../../components/display-list/display-list.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import { IndexarrayUtils } from "../../components/utils/index-array.utils.js";


const PlannerTask = () => {

const [tasks, setTasks] = useState([]);

const handleGetTask = (action, itemId) => {

    if(action === "finished"){
        const index = IndexarrayUtils(tasks,itemId);
        tasks[index].isFinished = true;

    }else if(action === "erased"){
        const index = IndexarrayUtils(tasks,itemId);
        const itemerased = tasks.splice(index,index+1);

        console.log(itemerased)
        console.log(tasks)
        setTasks(tasks)
    }
}
    
    const handleSetTask = (task) => {
        task['isFinished'] = false;
        tasks.push(task);
        const copy = [...tasks];
        
        setTasks(copy);
        // console.log(1);
        // console.log(tasks);
        // console.log(2);
        task = {};
    }

    return (
        <>
        <h2>Plannification de tâches</h2>
            <TodoForm setTask ={handleSetTask} />
            <DisplayList  getTask ={handleGetTask} data = {tasks} />
        </>
    )
}

export default PlannerTask;