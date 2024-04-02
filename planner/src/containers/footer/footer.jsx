import { useEffect, useState } from "react";


const Footer = () => {

    const [color, setColor] = useState('Red');
    const [nbOp, setNbOp] = useState(0);

    useEffect(() => {
        console.log('Effect : ' + {color});

        return () => {
            console.log(`Cleanup : ${color}`);
        }
    }, [color])

    useEffect(() => {
        console.log(`Vous avez cliqué ${nbOp}`);
    })

    const handleColor = (color) => {
        setColor(color);
        setNbOp(nbOp + 1);
    }

    return (
        <footer>
            <p>color</p>
            <div>
                <button onClick ={() => handleColor('Red')}>Rouge</button>
                <button onClick ={() => handleColor('green')}>Vert</button>
                <button onClick ={() => handleColor('blue')}>Bleu</button>
            </div>


        </footer>
    )

}

export default Footer;