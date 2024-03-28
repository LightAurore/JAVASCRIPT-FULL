import { useState } from "react";
import DisplayList from "../../components/display-list/display-list.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import { IndexarrayUtils } from "../../components/utils/index-array.utils.js";


const PlannerTask = () => {

const [tasks, setTasks] = useState([]);

const handleGetTask = (action, itemId) => {
    // bvdbvijhngbu
console.log('Action planner');
console.log(action, itemId);
console.log('action, itemId');
    if(action === "finished"){
        const index = IndexarrayUtils(tasks,itemId);
        tasks[index].isFinished = true;
        console.log("Finish");
        console.log(tasks[index].isFinished);
        setTasks(tasks)

    }else if(action === "erased"){
        const index = IndexarrayUtils(tasks,itemId);
        console.log("index : " + index);
        const itemerased = tasks.splice(index, 1);
        const copy = [...tasks]
        setTasks(tasks)
        // window.location.reload();
        console.log(1);
        console.log(itemerased)
        console.log(2);
        console.log(copy)
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

            <hr />
        </>
    )
}

export default PlannerTask;