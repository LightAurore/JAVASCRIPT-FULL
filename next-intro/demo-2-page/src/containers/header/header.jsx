
import styles from './header.module.css';


const Header = () => {


    return (
        <header className='bg-black text-white'>
            <nav>
                <ul className='flex flex-row gap-3 p-1'>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/product">Produit</a>
                    </li>
                    <li>
                        <a href="/about">A propos</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;