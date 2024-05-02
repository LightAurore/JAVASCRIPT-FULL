import style from "./category-page.module.css";

import imgUrl from './ai-generated-8491587_1280.jpg';

const CategoryPage = () => {



    return(
        <>
            <h2>Category</h2>

            <section className={style["articles-container"]}>
                <div>
                    <figure>
                        <img src={imgUrl} alt="image" />
                        <figcaption>
                            <h4>Tiramisu jujubes jelly beans dessert lollipop oat cake shortbread shortbread powder. Pastry chocolate biscuit wafer carrot cake shortbread sugar plum.</h4>
                            <p>
                                Tiramisu jujubes jelly beans dessert lollipop oat cake shortbread shortbread powder. Pastry chocolate biscuit wafer carrot cake shortbread sugar plum.
                            </p>
                        </figcaption>
                    </figure>
                </div>

                <div>
                    <article>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </article>
                    <article>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </article>
                    <article>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </article>
                    <article>
                        <img src={imgUrl} alt="image" />
                        <h3>Mon slug, une petite description de l'article</h3>
                    </article>

                </div>
            </section>
        
        
        </>
    )
}

export default CategoryPage;