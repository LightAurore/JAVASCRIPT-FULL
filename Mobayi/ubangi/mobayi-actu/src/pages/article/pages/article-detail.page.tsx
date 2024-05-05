import { useParams } from "react-router-dom";
import LikeDislike from "../../../components/liker/like-dislike";
import ReportWarning from "../../../components/report-warning/report-warning";
import Share from "../../../components/share/share";

import main from '../article-page.module.css';


const ArticleDetailPage = () => {

    const { articleId } = useParams();

    console.log(articleId);
    


    return(
        <div className={main["main-article__detail"]}>
            <fieldset>
            <h2>
            Le bilan d’une entreprise est une photographie fidèle de sa situation financière à un moment donné, révélant à la fois ses biens (actif) et ses dettes (passif)
            </h2>
            
            <figure>
                <img src="" alt="image" />
                <div className={main["article-action"]}>
                    <ReportWarning />
                    <LikeDislike />
                    <Share />
                </div>
            </figure>
            <div className={main["card-footer"]}>
          <div className={main["card-meta card-meta--views"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="EyeOpen">
              <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            2,465
          </div>
          <div className={main["card-meta card-meta--date"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Calendar">
              <rect x="2" y="4" width="20" height="18" rx="4" />
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M2 10h20" />
            </svg>
            Jul 26, 2019
          </div>
        </div>
            <h3></h3>
            <p>
                Il s’agit d’un état de synthèse qui résume ce que l’entreprise possède (ses actifs), ce qu’elle doit (ses passifs) et la valeur nette de l’entreprise (ses capitaux propres) à un instant précis
            </p>
            <p>
                Quelques points clés pour comprendre le bilan comptable :
            </p>
            <dl>
                <dt>Composition du bilan comptable</dt>
                <dd>
                    <ul>
                        <li>Actif : Il représente ce que l’entreprise possède. Cela inclut les biens, les créances, les stocks, les investissements, etc.</li>
                        <li>Passif : Il représente ce que l’entreprise doit. Cela inclut les dettes, les emprunts, les provisions, les capitaux propres, etc.</li>
                    </ul>
                </dd>

                <dt>Structure du bilan comptable</dt>
                <dd>
                    <ul>
                        <li>Les postes du bilan sont classés selon leur fonction dans le processus de l’activité de l’entreprise (financière, économique, etc.).</li>
                        <li>L’actif est ordonné par liquidité (du plus liquide au moins liquide), tandis que le passif est ordonné par exigibilité (du plus court terme au plus long terme).</li>
                    </ul>
                </dd>

                <dt>Équilibre du bilan</dt>
                <dd>
                    <ul>
                        <li>Dans un bilan, le total de l’actif est toujours égal au total du passif. Si ce n’est pas le cas, il convient d’identifier la raison du déséquilibre.</li>
                    </ul>
                </dd>
            </dl>
            <p>
                En somme, le bilan d’entreprise est un outil essentiel pour évaluer la santé financière d’une société et analyser sa rentabilité. Il permet également de comparer l’évolution du patrimoine de l’entreprise sur plusieurs années
            </p>
            </fieldset>
            
            {/* /* Commentaire de l'article */ 
             /* TODO Refactor with CSS */}
            <form id="comment-form" method="post" className={main["comments-form"]}>
                <h3 aria-label="input-comment">Ajouter un commentaire :</h3>
                <textarea id="input-comment" name="comment">
                </textarea>
                <br/>
                <input type="hidden" name="slug" value="" />
                <button type="submit">Envoyer</button>
                <span>message</span>
            </form>
            <br/>
            <div id="comment-list" className={main["comments-customer"]}>
                
                    <div>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam a fugit? Nam accusantium adipisci vel?</p>
                    </div>
            </div>
            <div id="comment-list" className={main["comments-customer"]}>
                
                    <div>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam a fugit? Nam accusantium adipisci vel?</p>
                    </div>
            </div>


        </div>
    )
}

export default ArticleDetailPage;