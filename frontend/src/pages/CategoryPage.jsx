import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import data from "../data";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";
import { Row, Col } from "react-bootstrap";
import Store from "../store/Context";
import { useEffect } from "react";

const CategoryPage = () => {
  //add to cart.
  const { cart, setCart } = Store();

  const addCart = (id) => {
    const product = filterItems.find((item) => item.id === id);
    if (product) {
      setCart([...cart, product]);
      console.log("Product added to cart:", product);
    }
  };

  // fiter über categorys
  const { category } = useParams();

  const filterItems = data.items.filter((item) => item.category === category);
  console.log(filterItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="categorypage">
        <h1 className="titleCategory">{category}</h1>
        <Row>
          {filterItems.map((item, index) => (
            <CategoryItem key={index} item={item} addCart={addCart} />
          ))}
        </Row>
      </section>
    </>
  );
};

export default CategoryPage;
