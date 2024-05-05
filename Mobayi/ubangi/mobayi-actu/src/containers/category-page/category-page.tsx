import style from "./category-page.module.css";

import imgUrl from './ai-generated-8491587_1280.jpg';
import CategoryRubric from "../../components/category-rubric/category-rubric";
import NewsletterCategory from "../../components/newsletter-cat/newsletter-cat";
import { Link } from "react-router-dom";

const CategoryPage = () => {


    return(
        <>

            <CategoryRubric />
            <NewsletterCategory />

            <section className={style["articles-container"]}>
                <Link to={'/article/1'} className={style["main-article"]}>
                    <figure>
                        <img src={imgUrl} alt="image" />
                        </figure>
                        <div>
                            <h4>Tiramisu jujubes jelly beans dessert lollipop oat cake shortbread shortbread powder. Pastry chocolate biscuit wafer carrot cake shortbread sugar plum.</h4>
                            <p>
                                Tiramisu jujubes jelly beans dessert lollipop oat cake shortbread shortbread powder. Pastry chocolate biscuit wafer carrot cake shortbread sugar plum.
                            </p>
                        </div>
                    
                </Link>

                <div>
                    <Link to={'/article/1'}>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </Link>
                    <Link to={'/article/1'}>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </Link>
                    <Link to={'/article/1'}>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </Link>
                    <Link to={'/article/1'}>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </Link>

                </div>
            </section>
        
        
        </>
    )
}

export default CategoryPage;