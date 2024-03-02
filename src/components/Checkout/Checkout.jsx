import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cartItems }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/confirmation', { state: { cartItems } });
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Total Items: {totalQuantity}</h2>
      <button onClick={handlePurchase}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
