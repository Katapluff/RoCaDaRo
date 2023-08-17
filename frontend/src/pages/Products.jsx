import Cards from "../components/cards/Cards";
import Karten from "../components/karten/Karten";

import "./Products.css";

const Products = () => {
  return (
    <section className="page-products" id="products">
    

      <div className="karten-section">
        <Karten />
      </div>
      <p className="productText">Für Sie auserlesene Produkte</p>
    </section>
  );
};

export default Products;
