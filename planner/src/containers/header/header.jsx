import { useState } from "react";


const Header = () => {

    const [onOff, setOnOff] = useState(false)

    return (
        <header>
            <h1>Mon planner</h1>
            <button onClick={() => setOnOff(onOff => !onOff)}>{onOff ? "OFF": "ON"}</button>

        </header>
    )
}

export default Header;