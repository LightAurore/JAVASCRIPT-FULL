import PropTypes from 'prop-types';


const ListTasks = (tasks) =>{
    console.log(tasks.length);

    return tasks.map((task, index) => {


    return task.isFinished ? (
            <li>
                <article>
                    <section>
                        <h4>{task.nom}</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur,  in id eius sunt exercitationem a molestias consectetur, laboriosam nostrum libero eum laborum tenetur facere, aliquid magnam? Aliquid perspiciatis quos obcaecati saepe esse?
                        </p>
                    </section>
                    <aside>
                        <button onClick={(e) => onFinish()} disabled={isFinished}>Terminer</button>
                        <button onClick={(e) => onErase()} disabled={isFinished}>Supprimer</button>
                    </aside>
                </article>
            </li>
    ) : (
        <li>
                <article>
                    <section>
                        <h4>Lire Ainsi parlait zarathoustra</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur,  in id eius sunt exercitationem a molestias consectetur, laboriosam nostrum libero eum laborum tenetur facere, aliquid magnam? Aliquid perspiciatis quos obcaecati saepe esse?
                        </p>
                    </section>
                    <aside>
                        <button onClick={(e) => onFinish()} disabled={isFinished}>Terminer</button>
                        <button onClick={(e) => onErase()} disabled={isFinished}>Supprimer</button>
                    </aside>
                </article>
        </li>
    )
    })
}


ListTasks.defaultProps = {
    tasks: [],
    onFinish: () => {},
    onErase: () => {},
}

ListTasks.prototype = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        isFinished: PropTypes.bool.isRequired,
        id: PropTypes.string,
        nom: PropTypes.string.isRequired,
        desc: PropTypes.string,
        prior: PropTypes.string
    })),
    onFinish: PropTypes.func.isRequired,
    onErase: PropTypes.func.isRequired
}


export default ListTasks;