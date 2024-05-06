
import ForeignCurrency from '../../components/foreign-currency/foreign-currency';
import style from './aside-right.module.css'

const AsideRight = () => {



    return(
        <aside  className={style["aside-right"]}>
                <div className={style["aside"]}>
                    <div className={style["aside-title"]}>
                        <h2>titre</h2>
                    </div>
                    <div className={style["aside-content"]}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit tempore provident veniam molestias nisi non illo maxime, magnam rem natus quam dolores eos nihil nam vel rerum voluptates. Earum, incidunt!
                        </p>
                    </div>
                </div>
                <marquee behavior="" direction="">
                    <ForeignCurrency />
                </marquee>
            </aside>
    )
}

export default AsideRight;