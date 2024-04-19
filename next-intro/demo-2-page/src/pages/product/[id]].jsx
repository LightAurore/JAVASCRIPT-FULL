import { getProductAll } from "@/services/product.service.js"

// url : /product
export default function ProductDetails({product}){
    return(
       <main>
           <h1>Détails d&apos;un produit</h1>
       </main>
    )
   }

   export function getStaticPaths() {
      const products = getProductAll();

      const paths = products.map(product =>({
         params: {
            id: product.id
         }
      }));
      
   }