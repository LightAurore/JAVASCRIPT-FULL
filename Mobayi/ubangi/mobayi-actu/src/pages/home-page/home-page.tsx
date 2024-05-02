
import CategoryAccueil from '../../components/category-accueil/category-accueil';
import style from './home.module.css'


const HomePage = () => {

    return (
        <div className={style["home"]}>
            <CategoryAccueil />
            <CategoryAccueil />
            <CategoryAccueil />
            <CategoryAccueil />
            <CategoryAccueil />
            <CategoryAccueil />
            
        </div>
    )
}

export default HomePage;