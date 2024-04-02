import PropTypes from 'prop-types';
import { useId, useState } from "react";
import style from './form-style.module.css'
import PriorityEnum from '../../enum/priority.enum.js';


const TodoForm = ({setTask}) => {
    const id = useId();
  

    const [inputs, setInputs] = useState({
        nom: '', desc: '', prior: PriorityEnum.normal
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            nom: inputs.nom,
            desc: inputs.desc,
            prior: inputs.prior
        }

        setTask(data);

        setInputs({
            nom: '', desc: '', prior: PriorityEnum.normal
        })

    }

    const handleInput = (e) => {
        setInputs({
           ...inputs,
            [e.target.name]: e.target.value
        })
    }
 

    return (
        <div className={style['form-container']}>
            <h3>Ajouter une nouvelle tâche</h3>
            <form className={style["form-todo"]} onSubmit={handleSubmit}>
                <section>
                    <label htmlFor={id + '-name'}>Nom</label>
                    <input type="text" id={id + '-name'} name="nom" required value={inputs.nom} onChange={handleInput} />
                </section>

                <section>
                    <label htmlFor={id + '-des'}>Description</label>
                    <textarea name="desc" id={id + '-des'} cols="30" rows="10" value={inputs.desc} onChange={handleInput} />
                </section>

                <section>
                    <label htmlFor={id + '-prior'}>Priorité</label>
                    <article>
                        <select name="prior" id={id + '-prior'} value={inputs.prior} onChange={handleInput} >
                            <option value="" readOnly> --- niveau de priorité --- </option>
                            <option value={PriorityEnum.low}>Faible</option>
                            <option value={PriorityEnum.normal}>Normal</option>
                            <option value={PriorityEnum.high}>Haute</option>
                            <option value={PriorityEnum.urgent}>Urgent</option>
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
    desc: PropTypes.string,
    prior: PropTypes.string,
    setTask: PropTypes.func
}

export default TodoForm;