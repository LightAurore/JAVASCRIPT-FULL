// npm
import PropTypes, { string } from 'prop-types';
import useSWR from 'swr';

// local
import style from "./caterogy.module.css";

// images
import img1 from './ai-generated-8631634_1280.jpg';
import img2 from './solar-panels-8593759_1280.png';
import { Link } from 'react-router-dom';
import { newsWorldService } from '../../services/news-world.service';



const ArticleItem = ({
    title,
    description,
    urlToImage
    }:{
    title: string,
    description: string,
    urlToImage: string
}) => {

    <article>
        <img src={urlToImage? urlToImage : ''} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </article>

}

const CategoryAccueil = ({category, catNavigation}) => {
// Fake news
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

    const {data, isLoading} = useSWR(
        `currency`, 
        () => newsWorldService(),
        { revalidateOnFocus: false }
    );
    
    const articles = [data][0];
    // const articles = data ? data[0] : null;
    // console.log(articles?.['1']?.title || "bug");

    let monArr : {
        source: string;
        author: string;
        title: string;
        description: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }[] = [];

    for (let index = 0; index < 20; index++) {  

        const info = articles ? 
            (
                articles[`${index}`] ? 
                    articles[`${index}`] 
                : "bug"  
            ) 
            : "Null";
        
        monArr = [...monArr, info];
    }

    console.log(monArr);
    

    // const articlesJSX = monArray.map(
    //     art => <ArticleItem {...art} key={art.title} />
    // );

    return(
    <section className={style["home-cat"]}>
    
        <div className={style["articles-categories"]}>
            <Link to={catNavigation}>
                <i>📰</i>
                <h2>{category}</h2>
            </Link>
        </div>
        
        <div className={style["articles-news"]}>
            <div className={style["box-1"]}>
                <Link to={'article/1'}>
                    <img src={img1} alt="image" />
                    <div className={style["cat-color"]}>
                        <h4>
                            Tiramisu jujubes jelly beans dessert .
                        </h4>
                        <p>
                        Croissant dessert cotton candy dessert carrot cake fruitcake toffee chocolate cake pudding. 
                        </p>
                    </div>
                </Link>
                <Link to={'article/1'}>
                    <img src={img1} alt="image" />
                    <div className={style["cat-color"]}>
                        <h4>
                            Tiramisu jujubes jelly beans dessert .
                        </h4>
                        <p>
                        Croissant dessert cotton candy dessert carrot cake fruitcake toffee chocolate cake pudding. 
                        </p>
                    </div>
                </Link>
                </div>
            <div box-2 className={style["box-2"]}>
                <Link to={'article/1'}>
                    <figure>
                        <img src={img2} alt="image1"/>
                    </figure>
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

        <div className={style["art-international"]}>
            {
                monArr.map(
                    actu => (
                    actu.title !='[Removed]' ?
                    (<Link to={'article/1'} className={style["box-int"]}>
                        <figure>
                            <img src={actu.urlToImage} alt="" />
                        </figure>
                            
                        <div>
                            <p>
                                {actu.title}
                            </p>
                        </div>
                    </Link>) : ''
                    ) 
                )
            }
            {/* {articlesJSX} */}
        </div>

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