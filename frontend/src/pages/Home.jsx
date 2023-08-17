import "./Home.css";
// import GroupExample from "../components/cards/Cards.jsx";
import Carousel from "../components/carousel/Carousel";
import Products from "./Products";
import Brands from "./Brands";
import VariationsExample from "../components/footer/FooterButtons";
import AnimationExample from "../components/footer/Endproject";
// import Searchbar from "../components/searchbar/Searchbar";
import Garantise from "../components/garantise/Garantise";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <section className="page" id="home">
      {/* <Searchbar /> */}
      <Carousel />
      <Products />
      <Brands />
      <Garantise />
      <VariationsExample />
      <AnimationExample />
    </section>
  );
};

export default Home;
