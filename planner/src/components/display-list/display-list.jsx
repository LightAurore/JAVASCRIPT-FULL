import PropTypes from 'prop-types';

import ListTasks from '../list-tasks/list-tasks.jsx';

import style from './display-style.module.css'
import { useState } from 'react';


const DisplayList = ({data, getTask}) => {

    const [itemId, setItemid] = useState('');
    const [action, setAction] = useState('');

    const handlerDataArray = (onButton, TaskId) => {
        
        setItemid(TaskId);
        
        setAction(onButton);

        getTask(onButton, TaskId); 

        setItemid('');
        setAction('');
    }

    return (data.length !== 0) ?  (

        <div className={style["display-list"]}>
            <h3>Liste de tâches</h3>
            <header>
                <h4>Tâche</h4>
                <h4>Priorité</h4>
                <h4>En cours</h4>
                <h4>Terminé</h4>
            </header>

            <ul className={style["container-list"]} >
                <ListTasks onDisplay ={handlerDataArray} data= {data} />
            </ul>
            
        </div>
    ) : (
        <></>
    )
}

ListTasks.defaultProps = {
    data: [],
    getTask: () => {}
}

ListTasks.propTypes = {
    data: PropTypes.array,
    getTask: PropTypes.func
}


export default DisplayList;