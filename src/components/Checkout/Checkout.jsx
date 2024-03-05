import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cartItems }) => {
  const navigate = useNavigate();
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm({...checkoutForm, [name]: value })
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const orderNum = Math.floor(Math.random() * 1000000);
    navigate('/confirmation', { state: { cartItems, ...checkoutForm, orderNum } });
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <form className="checkout" onSubmit={handlePurchase}>
      <h2>Total Items: {totalQuantity}</h2>
      <input 
        type="text" 
        placeholder="First Name" 
        name="firstName" 
        value={checkoutForm.firstName} 
        onChange={handleInputChange}
        required 
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        name="lastName" 
        value={checkoutForm.lastName} 
        onChange={handleInputChange}
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        name="email" 
        value={checkoutForm.email} 
        onChange={handleInputChange}
        required 
      />
      <input 
        type="text" 
        placeholder="Address" 
        name="address" 
        value={checkoutForm.address} 
        onChange={handleInputChange}
        required 
      />
      <input 
        type="text" 
        placeholder="City" 
        name="city" 
        value={checkoutForm.city} 
        onChange={handleInputChange}
        required 
      />
      <input 
        type="text" 
        placeholder="State/Province" 
        name="state" 
        value={checkoutForm.state} 
        onChange={handleInputChange}
        required 
      />
      <input 
        type="text" 
        placeholder="ZIP/Postal Code" 
        name="zip" 
        value={checkoutForm.zip} 
        onChange={handleInputChange}
        required 
      />
      <input 
        type="text" 
        placeholder="Country" 
        name="country" 
        value={checkoutForm.country} 
        onChange={handleInputChange}
        required 
      />
      <button type="submit">Confirm Purchase</button>
    </form>
  );
};

export default Checkout;
