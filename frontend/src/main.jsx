import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ParentContext } from "./store/Context.jsx";
import { FavoriteProvider } from "./store/FavoritesContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     
        <ParentContext>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </ParentContext>
      
    </BrowserRouter>
  </React.StrictMode>
);
