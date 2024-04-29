import LikeDislike from "../../components/liker/like-dislike";
import ReportWarning from "../../components/report-warning/report-warning";
import Share from "../../components/share/share";

import main from './article-page.module.css';


const ArticlePageDetail = () => {


    return(
        <main className={main["main-article__detail"]}>
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
        </main>
    )
}

export default ArticlePageDetail;