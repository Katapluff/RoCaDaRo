import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ListCart from "./pages/Cart";
import AboutUsPage from "./pages/Footer/AboutUsPage";
import AGB from "./pages/Footer/AGB";
import FavoritesPage from "./pages/FavoritesPages";


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="cart" element={<ListCart />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="AGB" element={<AGB />} />
        </Route>
      </Routes>
    
  );
};

export default App;
