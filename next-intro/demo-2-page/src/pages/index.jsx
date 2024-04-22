
import Layout from "@/containers/layout/layout.jsx";
import { addProduct } from "@/services/product.service.js";
import { Inter, Abhaya_Libre } from "next/font/google";

// Gestion de fonts
const inter = Inter({ subsets: ["latin"] });
const long = Abhaya_Libre({ subsets: ["latin"], weight: "800" });

export default function Home() {

  const handleTestProduct = () => {
    addProduct({
      name: "test",
      desc: 'Ceci est un test' + `${new Data().toISOString()}`,
      price: 1000
      })
  }


  return (
    <Layout>
      <h1 className={`${long.className}`}>Demo NextJS - Page Router</h1>
      <button onClick={handleTestProduct} >Add test product</button>
    </Layout>
  );
}
