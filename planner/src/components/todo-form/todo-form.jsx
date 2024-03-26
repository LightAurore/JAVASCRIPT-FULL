import PropTypes from 'prop-types';
import { useId, useState } from "react";


const TodoForm = ({setTask, task}) => {
    const id = useId();
    const uuId = 'Id-' + (Math.random().toString(36)).replace(" ","-");


    const [inputs, setInputs] = useState({
        nom: '', desc: '', prior: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: 'data-' + uuId,
            nom: inputs.nom,
            desc: inputs.desc,
            prior: inputs.prior
        }


        setTask(data);

        setInputs({
            nom: '', desc: '', prior: ''
        })

    }

    const handleInput = (e) => {
        setInputs({
           ...inputs,
            [e.target.name]: e.target.value
        })
    }
 

    return (
        <div>
            <h3>Ajouter une nouvelle tâche</h3>
            <form className="todo-form" onSubmit={handleSubmit}>
                <section>
                    <label htmlFor={id + '-name'}>Nom</label>
                    <input type="text" id={id + '-name'} name="nom" required value={inputs.nom} onChange={handleInput} />
                </section>

                <section>
                    <label htmlFor={id + '-des'}>Description</label>
                    <textarea name="desc" id={id + '-des'} cols="30" rows="10" required value={inputs.desc} onChange={handleInput} />
                </section>

                <section>
                    <label htmlFor={id + '-prior'}>Priorité</label>
                    <article>
                        <select name="prior" id={id + '-prior'} required value={inputs.prior} onChange={handleInput} >
                            <option value="" readOnly> --- niveau de priorité --- </option>
                            <option value="normal">Normal</option>
                            <option value="important">Important</option>
                            <option value="urgent">Urgent</option>
                        </select>
                        <input type="submit" value="Ajouter" />
                    </article>
                </section>

            </form>
        </div>
    )
}

TodoForm.defaultProps= {
    nom: '',
    desc: '',
    prior: '',
    setTask: () => {}
}

TodoForm.propTypes = {
    nom: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    prior: PropTypes.string.isRequired,
    setTask: PropTypes.func
}

export default TodoForm;