import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from "../components/cart/ProductCart";
import Store from "../store/Context";
import "../pages/Cart.css";
import PaymentForm from "../components/PayFormular";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import config from "../../config";


const stripePromise = loadStripe(config.stripePublicKey);


export default function ListCart() {
  const { show1, show2, cart } = Store();

  const [total, setTotal] = useState(0);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  useEffect(() => {
    let cost = cart.reduce((cost, item) => {
      return cost + item.price;
    }, 0);
    setTotal(parseFloat(cost.toFixed(2)));
  }, [cart]);

  const handlePaymentButtonClick = () => {
    setShowPaymentForm(true);
  };

  return (
    <div className={show1}>
      <div className={`${show2} cart_page`}>
        <div className="cart_close">
          {/* <i onClick={toggleClose} className="bi bi-x-lg"></i> */}
        </div>
        <h2>Your cart</h2>
        {cart.map((item, index) => (
          <Cart key={index} item={item} />
        ))}
        <div className="cart_footer">
          <h3>Total: {total}€</h3>
          {!showPaymentForm ? (
            <button className="btn-primary" onClick={handlePaymentButtonClick} style={{width:"100px",height:"35px",borderRadius: "5px"}}>Payment</button>
          ) : (
            <Elements stripe={stripePromise}>
              <PaymentForm totalCost={total}/>
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
}

