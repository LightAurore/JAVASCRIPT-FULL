import PropTypes from 'prop-types';
import { useId, useState } from 'react';

import style from './list-style.module.css'

const ListTasks = ({data, onDisplay}) =>{

    const [item, setItem] = useState('');

    // const id = useId();

    const handlerErase = (taskId) => {
        // console.log(taskId);
        setItem('erased');
        onDisplay(item, taskId)
    }
    
    const handlerFinished = (taskId) => {
        // console.log(taskId);
        setItem('finished');
        onDisplay(item, taskId)
    }

    // console.log(3);
    // console.log(data);
    // console.log(typeof tasks);
    // console.log(4);

    const maListe = data;
   
    // console.log(5);

    const myTasks = maListe.map((task, index) => {
        // console.log(task.isFinished);
        // console.log(task.id);
        
    return (task.isFinished) ? (
            <li className={style['list-item']+' '+ style['item-finished']} key={task.id}>
                <article>
                    <section>
                        <h4>{task.nom}</h4>
                        <p>
                        {task.desc}
                        </p>
                    </section>
                    <aside>
                        <button onClick={() => handlerFinished(task.id)} disabled={task.isFinished}>Terminer</button>
                        <button onClick={() => handlerErase(task.id)} disabled={task.isFinished}>Supprimer</button>
                    </aside>
                </article>
            </li>
    ) : (
        <li className={style['list-item']} key={task.id}>
                <article>
                    <section>
                        <h4>{task.nom}</h4>
                        <p>
                        {task.desc}
                        </p>
                    </section>
                    <aside>
                        <button onClick={() => handlerFinished(task.id)} disabled={task.isFinished}>Terminer</button>
                        <button onClick={() => handlerErase(task.id)} disabled={task.isFinished}>Supprimer</button>
                    </aside>
                </article>
        </li>
    )
    })

    return myTasks;

}


ListTasks.defaultProps = {
    data: [],
    onDisplay: () => {}
}

ListTasks.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape({
        isFinished: PropTypes.bool.isRequired,
        id: PropTypes.string,
        nom: PropTypes.string.isRequired,
        desc: PropTypes.string,
        prior: PropTypes.string
    })),
    onDisplay: PropTypes.func
}


export default ListTasks;