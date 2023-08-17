import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteStore from "../store/FavoritesContext";
import Store from "../store/Context";
import "./favoritesPages.css";

const FavoritesPage = (props) => {
  const { addCart, removeItemCart } = Store();
  const { item } = props;

  const { favorites, removeFromFavorites } = FavoriteStore();
  const navigate = useNavigate();

  console.log(favorites);

  return (
    <>
      <div className="page center-content" id="favorites-pages">
      <h1 className="page-title">My Favorites</h1>
        {favorites.length === 0 ? (
          <p>No favorites selected.</p>
        ) : (
          <ul className="ulFavorites">
            {favorites.map((item, index) => (
              
                <li key={index}>
                  
                    
                      <div className="product-card favorite hover-effect">
                        <img className="product-image"src={item.image} alt="Product" />
                        <h2>{item.title}</h2>
                        <p>€{item.price}</p>
                        
                          <button
                            className="add-to-cart-button"
                            onClick={() => {
                              addCart(item.id);
                              removeFromFavorites(item);
                            }}
                          >
                            Add to cart
                          </button>
                          <div
                            className="remove_item"
                            onClick={() => {
                              removeFromFavorites(item);
                            }}
                            >
                            <i className="bi bi-trash"></i>
                          </div>
                      </div>
                    
                  
                  
                </li>
              
            ))}
          </ul>
        )}

        <button className="btn btn-primary" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      </div>
    </>
  );
};

export default FavoritesPage;
