import { useState } from "react";
import DisplayList from "../../components/display-list/display-list.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";


const PlannerTask = () => {

const [tasks, setTasks] = useState([]);

const handleGetTask = (tasks) => {

}
    
    const handleSetTask = (task) => {
        task['isFinished'] = false;
        tasks.push(task);
        const copy = [...tasks];
        
        setTasks(copy);

        console.log(tasks);
        task = {};
    }

    return (
        <>
        <h2>Plannification de tâches</h2>
            <TodoForm setTask ={handleSetTask} />
            <DisplayList getTask ={handleGetTask} />
        
        </>
    )
}

export default PlannerTask;