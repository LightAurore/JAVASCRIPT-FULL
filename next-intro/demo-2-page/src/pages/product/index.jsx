// url: /product/

export default function ProductList(){

    return (
        <main>
            <h1>Les produits ...</h1>
        </main>
    )
}


// Methode exec lors du Build
export async function getServerProps(){
    // Contexte
    // const context = {
    //     req: {},
    //     res: {},
    //     query: {},
    //     body: {},
    //     headers: {},
    //     cookies: {},
    //     isServer: true,
    //     isPreview: false,
    //     previewData: {}
    // }

    //
    const products = await getProductAll();

    // Envoi de données à la page
    return {
        props: {
            products
        }
    }
}