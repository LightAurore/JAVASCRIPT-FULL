import PropTypes from 'prop-types';

import ListTasks from '../list-tasks/list-tasks.jsx';

const DisplayList = ({getTask, tasks}) => {

    return (

        <div className="display-list">
            <h3>Liste de tâches</h3>
            <header>
                <h4>Tâche</h4>
                <h4>Priorité</h4>
                <h4>En cours</h4>
                <h4>Terminé</h4>
            </header>

            <ul>
                <ListTasks />
            </ul>
            
        </div>
    )
}

ListTasks.defaultProps = {
    tasks: [],
    getTask: () => {}
}

ListTasks.propTypes = {
    tasks: PropTypes.array,
    getTask: PropTypes.func
}


export default DisplayList;