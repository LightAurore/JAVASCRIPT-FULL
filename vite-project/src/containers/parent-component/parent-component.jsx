import { useCallback, useState } from "react";



function ParentComponent(){

    const [count, setCount] = useState(0);

    // compteur
    const increment = () => {
        setCount(count + 1);
    }

    // memorisation du compteur
    const memoizedIncrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, [count]);

    return (
        <div>
            <p>Count : {count}</p>

            <ChildrenComponent increment= {increment} /> 


            <ChildrenComponent increment= {memoizedIncrement} /> 
        </div>
    )

}

function ChildrenComponent ({increment}){
    return (
        <button onClick={increment} >
            Increment
        </button>
    )
}

export default ParentComponent;