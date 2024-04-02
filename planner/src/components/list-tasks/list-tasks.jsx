import PropTypes from 'prop-types';
import { useId, useState } from 'react';

import style from './list-style.module.css'

const ListTasks = ({data, onDisplay}) =>{

    const handlerErase = (taskId) => {
        onDisplay("erased", taskId);

        taskId= '';
    }
    
    const handlerFinished = (taskId) => {
        onDisplay("finished", taskId)
        
        taskId= '';
    }

    const maListe = data;
   
    // console.log(5);

    return (
        maListe.map((task, index) => {
        // console.log(task.isFinished);
        // console.log(task.id);
    /*     
        return (task.isFinished) ? (
            <li className={style['list-item']+' '+ style['item-finished']} key={task.id}>
                <article>
                    <section>
                        <h4>{task.nom}</h4>
                        {console.log(task.prior)}
                         <span>{(task.prior === '4') ? 'urgent' : ''} </span>
                        <p>
                        {task.desc}
                        </p>
                    </section>
                    <aside>
                        <button onClick={(e) => handlerFinished(task.id)} disabled={task.isFinished}>Terminer</button>
                        <button onClick={(e) => handlerErase(task.id)} disabled={task.isFinished}>Supprimer</button>
                    </aside>
                </article>
            </li>
    ) : (
        <li className={style['list-item']} key={task.id}>
                <article>
                    <section>
                        <h4>{task.nom} </h4>
                        <span>{(task.prior === '4') ? 'urgent' : ''} </span>
                        <p>
                        {task.desc}
                        </p>
                    </section>
                    <aside>
                        <button onClick={(e) => handlerFinished(task.id)} disabled={task.isFinished}>Terminer</button>
                        <button onClick={(e) => handlerErase(task.id)} disabled={task.isFinished}>Supprimer</button>
                    </aside>
                </article>
        </li>
    )
     */
    return (!task.isFinished) && (
        <li className={style['list-item']+' '+ style['item-finished']} key={task.id}>
            <article>
                <section>
                    <h4>{task.nom}</h4>
                    <p>
                    {task.desc}
                    </p>
                </section>
                <aside>
                    <button onClick={(e) => handlerFinished(task.id)} disabled={task.isFinished}>Terminer</button>
                    <button onClick={(e) => handlerErase(task.id)} disabled={task.isFinished}>Supprimer</button>
                </aside>
            </article>
        </li>
)
    })
)

}


ListTasks.defaultProps = {
    data: [],
    onDisplay: () => {}
}

ListTasks.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape({
        isFinished: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        nom: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        prior: PropTypes.string.isRequired
    })),
    onDisplay: PropTypes.func
}


export default ListTasks;