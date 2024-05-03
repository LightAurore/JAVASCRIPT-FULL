// npm
import { useTranslation } from 'react-i18next';

// local
import CategoryAccueil from '../../containers/category-accueil/category-accueil';
import { category_title } from './category';
import style from './home.module.css'


const HomePage = () => {
    const categories = category_title;

    const { t } = useTranslation();

    const CategoriesTSX = categories.map(
        cat => <CategoryAccueil 
            category= {t(cat.cat)}
            catNavigation = {cat.cat_nav}
        />
    )
    return (
        <div>
            

            <div className={style["home"]}>
                {CategoriesTSX}
            </div>

            
        </div>
    )
}

export default HomePage;