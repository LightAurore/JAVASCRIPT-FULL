import Layout from "@/containers/layout/layout.jsx";
import { getProductAll } from "@/services/product.service.js"

// url : /product
export default function ProductList({ products }){
 return(
    <Layout>
        <h1>Détail d&apos;un produit</h1>
        <section>
            {products.map(product => (
                <article>
                    {product.name} {product.price}
                </article>
            ))}
        </section>
    </Layout>
 )
}


// Methode exec lors du Build
export async function getStaticProps(){

    const products = await getProductAll();

    // Envoi de données à la page
    return {
        props: {
            products
        }
    }
}