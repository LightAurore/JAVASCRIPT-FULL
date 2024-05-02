// npm
import PropTypes, { string } from 'prop-types';

// local
import style from "./caterogy.module.css";

// images
import img1 from './ai-generated-8631634_1280.jpg';
import img2 from './solar-panels-8593759_1280.png';
import { Link } from 'react-router-dom';


const CategoryAccueil = ({category, catNavigation}) => {

    const fakeNews = [
        {
            title: "Guerre en Ukraine",
            desc: "Au 125eme jour les bombardements s'intensifient dans l'Est tandis que les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        },
        {
            title: "Guerre en Ukraine",
            desc: "125eme jour lesbobordement s'intensifient dans l'Est tandisque les pourparlers de paix se poursuivent pour trouver une issue pacifique à la résolution de ce conflit"
        }
    ]



    return(
        <section className={style["home-cat"]}>
        <Link to={catNavigation}>
            <div>
                <i>📰</i>
                <h2>{category}</h2>
            </div>
        </Link>
        
        <article>
            <div className={style["box-container"]}>
                <Link to={'article/1'} className={style["box-1"]}>
                    <img src={img1} alt="image" />
                    <div className={style["cat-color"]}>
                        <h4>
                            Tiramisu jujubes jelly beans dessert lollipop oat cake shortbread shortbread powder.
                        </h4>
                        <p>
                        Croissant dessert cotton candy dessert carrot cake fruitcake toffee chocolate cake pudding. Oat cake pie tootsie roll candy carrot cake chocolate bar cake sweet roll cupcake.
                        </p>
                    </div>
                </Link>
                <div box-2 className={style["box-2"]}>
                    <Link to={'article/1'}>
                        <img src={img2} alt="image1"/>
                        <div>
                            <h3>Titre</h3>
                            <p>
                                Marshmallow jujubes jelly-o cake donut.
                            </p>
                        </div>
                    </Link>
                    <Link to={'article/1'}>
                        <img src={img2} alt="image1"/>
                        <div>
                            <h3>Titre</h3>
                            <p>
                                Marshmallow jujubes jelly-o cake donut.
                            </p>
                        </div>
                    </Link>
                    <Link to={'article/1'}>
                        <img src={img2} alt="image1"/>
                        <div>
                            <h3>Titre</h3>
                            <p>
                                Marshmallow jujubes jelly-o cake donut.
                            </p>
                        </div>
                    </Link>
                    <Link to={'article/1'}>
                        <img src={img2} alt="image1"/>
                        <div>
                            <h3>Titre</h3>
                            <p>
                                Marshmallow jujubes jelly-o cake donut.
                            </p>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </article>

        <article className={style["art-international"]}>
            {
                fakeNews.map(
                    actu => (
                    <Link to={'article/1'} className="box-int">
                        <img src={img2} alt="" />
                            <h4>
                               {actu.title}
                            </h4>
                            <p>
                                {actu.desc}
                            </p>
                    </Link>
                    )
                )
            }
            
        </article>

    </section>
    )
}

CategoryAccueil.defaultProps = {
    category: []
}

CategoryAccueil.propTypes = {
    category: PropTypes.arrayOf(string)
};

export default CategoryAccueil;