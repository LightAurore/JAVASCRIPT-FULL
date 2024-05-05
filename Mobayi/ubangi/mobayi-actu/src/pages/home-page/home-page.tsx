// npm
import { useTranslation } from 'react-i18next';

// local
import CategoryAccueil from '../../containers/category-accueil/category-accueil';
import { category_title } from './category';
import getQuotes from '../../hooks/useAxios';


const HomePage = () => {
    const categories = category_title;

    const data = getQuotes();

    console.log("---------------------------------------------");
    
    console.log(data);
    

    const { t } = useTranslation();

    const CategoriesTSX = categories.map(
        cat => <CategoryAccueil 
            category= {t(cat.cat)}
            catNavigation = {cat.cat_nav}
        />
    )
    return (
        <div>
            {CategoriesTSX}
        </div>
    )
}

export default HomePage;