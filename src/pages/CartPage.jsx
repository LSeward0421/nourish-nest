import './CartPage.css';
import CartList from '../components/Cart/CartList';

const CartPage = ({ cart }) => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <CartList cartItems={cart} />
    </div>
  )
};

export default CartPage;