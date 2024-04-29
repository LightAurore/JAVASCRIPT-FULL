
import style from './home.module.css'


const HomePage = () => {

    return (
        <div className={style["home"]}>
            <section>
                <a href="#"><h2>Les actualités</h2></a>
                
                <article>
                    <div className={style["box-container"]}>
                        <a href='#' className={style["box-1"]}>
                            <figure>
                                <img src="" alt="image" />
                            </figure>
                            <h4>
                            Tiramisu jujubes jelly beans dessert lollipop oat cake shortbread shortbread powder. Pastry chocolate biscuit wafer carrot cake shortbread sugar plum.
                            </h4>
                            <p>
                                Croissant dessert cotton candy dessert carrot cake fruitcake toffee chocolate cake pudding. Oat cake pie tootsie roll candy carrot cake chocolate bar cake sweet roll cupcake. Sweet roll candy canes bonbon chocolate cake ice cream cheesecake jelly croissant. Lemon drops sweet sweet roll ice cream donut jelly gummi bears topping lollipop.
                            </p>
                        </a>
                        <div box-2 className={style["box-2"]}>
                            <a href="#">
                                <img src="" alt="image1"/>
                                <figcaption>
                                    Marshmallow jujubes jelly-o cake donut.
                                </figcaption>/
                            </a>
                            <a href="#">
                                <img src="" alt="image2"/>
                                <figcaption>Liquorice liquorice macaroon jujubes dessert gummi bears. Jelly beans icing candy marzipan chupa chups dessert apple pie gingerbread marshmallow.</figcaption>
                            </a>
                            <a href="#">
                                <img src="" alt="image3"/>
                                <figcaption>Liquorice liquorice macaroon jujubes dessert gummi bears. Marshmallow jujubes jelly-o cake donut.</figcaption>
                            </a>
                            <a href="#">
                                <img src="" alt="image4"/>
                                <figcaption>Liquorice liquorice macaroon jujubes dessert gummi bears.Marshmallow jujubes jelly-o cake donut.</figcaption>
                            </a>
                        </div>
                    </div>
                </article>

            </section>

            <section>

            </section>

            <section>

            </section>

            <section>

            </section>
            
        </div>
    )
}

export default HomePage;