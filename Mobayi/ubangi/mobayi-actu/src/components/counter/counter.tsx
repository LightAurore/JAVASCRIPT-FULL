import { useState } from 'react';
import style from './counter.module.css'


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <div className = {style["btn-container"]}>
                    <button onClick={() => setCount((count) => count + 1)}>
                    +
                    </button>
                    <p>count : {count}</p>
                    <button onClick={() => setCount((count) => count - 1)}>
                    -
                    </button>
                </div>
                <button onClick={() => setCount(0)}>
                Reset
                </button>
            </div>
        </>
    )

} 

export default Counter;