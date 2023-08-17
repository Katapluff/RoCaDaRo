import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.js";

//1.Context erstellen

const InitialContext = createContext();

//2. ParentContext Komponent erstellen
export function ParentContext({ children }) {
  const navigate = useNavigate();

  //Variablen
  const [menu, setMenu] = useState(true);
  const show1 = menu ? "carts show" : "carts";
  const show2 = menu ? "cart show" : "cart";
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([...data.items]);
  const [showModal, setShowModal] = useState(false);
  //Fuctionen
  const handleHomeLinkClick = (event) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      const homeElement = document.getElementById("home");
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleBrandsLinkClick = (event) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      const brandsElement = document.getElementById("brands");
      if (brandsElement) {
        brandsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleProductsLinkClick = (event) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      const productsElement = document.getElementById("products");
      if (productsElement) {
        productsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  //Schließen
  const toggleClose = () => {
    setMenu(false);
    navigate("/products");
  };
  //Öffnen
  const toggleOpen = () => {
    setMenu(true);
  };

  // Neue ID generieren.
  //=>Hier
  // Helpers
  const generateId = () => {
    return "id" + new Date().getTime();
  };
  //Artikel mit ID in den Cart legen.
  const addCart = (id) => {
    const updatedCartItems = [...cartItems, id];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    const data = products.find((product) => product.id === id);
    const newCartState = [
      ...cart,
      { ...data, cartEntryId: generateId(), selectedSize: "S" },
    ];
    setCart(newCartState);
    localStorage.setItem("cart", JSON.stringify(newCartState));
  };

  // Löschen den Artikel aus dem Cart mit der neuen ID, die wir in (generateId) erstellt haben =>
  const removeItemCart = (entryId) => {
    const updatedCart = cart.filter((entry) => {
      return entry.cartEntryId !== entryId;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //Values in Object
  let value = {
    data,
    menu,
    setMenu,
    show1,
    show2,
    toggleClose,
    toggleOpen,
    cart,
    setCart,
    addCart,
    products,
    setProducts,
    removeItemCart,
    handleHomeLinkClick,
    handleBrandsLinkClick,
    handleProductsLinkClick,
    showModal,
    setShowModal,
    // favorites,
    // setFavorites
  };
  //Koponents

  return (
    <InitialContext.Provider value={value}>{children}</InitialContext.Provider>
  );
}

//3.Store Inizialisieren
const Store = () => useContext(InitialContext);
export default Store;
