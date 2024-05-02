import { useId } from "react";
import style from "./newsletter-cat.module.css";


const NewsletterCategory = () => {

 const newsletterId = useId();
// const category = "newsletter-cat";

    return (
        <div className={style["category--container"]}>

            <h2>Newsletter</h2>
            <form className={style["category--container__form"]} >
                <label htmlFor={newsletterId}></label>
                <input type="search" name="" id="" />
                <button type="submit">✉</button>
            </form>
        </div>
    )
}

export default NewsletterCategory;