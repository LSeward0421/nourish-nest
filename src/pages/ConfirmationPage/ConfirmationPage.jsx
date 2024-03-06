import { useLocation, Link } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const { firstName, orderNum, cartItems } = location.state;

  return (
    <div className='confirmation-page'>
      <h1>Thank You for Your Purchase, {firstName}!</h1>
      <p>Your order number is: {orderNum}.</p>
      <div className='purchase-list'>
        <h2>Your Purchased Items:</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.label}</strong> - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Link to='/' className='continue-shopping-btn'>
        Continue Shopping
      </Link>
    </div>
  );
};

export default ConfirmationPage;
