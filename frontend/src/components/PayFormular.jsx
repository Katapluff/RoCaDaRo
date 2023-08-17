import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import config from '../../config';
import './PaymentFormular.css';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setSuccess(false);
    } else {
      // Envía el ID del pago a tu servidor para completar la transacción
      console.log('ID del pago:', paymentMethod.id);
      // Aquí puedes realizar acciones adicionales, como guardar el ID del pago en tu base de datos, mostrar un mensaje de confirmación, etc.
      setError(null);
      setSuccess(true);
    }
  };

  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <CardElement />
          {error && <div>{error}</div>}
          {success && <div>Pay!!!</div>}
          <button className='btn-primary' type="submit" style={{width:"90px",height:"30px",borderRadius: "5px"}}>Pay</button>
        </form>
      </div>
    );
  };

export default PaymentForm;

