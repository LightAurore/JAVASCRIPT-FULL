import { useCallback, useState } from "react";

import { v4 as uuid4 } from "uuid";

import DisplayList from "../../components/display-list/display-list.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import { IndexarrayUtils } from "../../components/utils/index-array.utils.js";



// 
// import { promises as fs } from 'fs'

const PlannerTask = () => {

const [tasks, setTasks] = useState([]);

const handleGetTask = (action, itemId) => {
    if(action === "finished"){
        const index = IndexarrayUtils(tasks,itemId);
        tasks[index].isFinished = true;
        setTasks([...tasks])

    }else if(action === "erased"){
        const index = IndexarrayUtils(tasks,itemId);
        tasks.splice(index, 1);
        const copy = [...tasks]
        setTasks(copy)
        // window.location.reload();
    }
}


    
const handleSetTask = useCallback((task) => {
        // const myId = 'Id-' + (Math.random().toString(36)).replace(" ","-");


        task['isFinished'] = false;
        // task['id'] = 'item-' + myId;
        task['id'] = 'item-' + uuid4();

        console.log(task);
        
        tasks.push(task);
        const copy = [...tasks];
        
        setTasks(copy);
        task = {};
    }, []);

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