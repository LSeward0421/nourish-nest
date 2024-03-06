import './CartPage.css';
import CartList from '../../components/Cart/CartList';
import Checkout from '../../components/Checkout/Checkout';

const CartPage = ({ cart, removeFromCart }) => {
  const isCartEmpty = cart.length === 0;
  return (
    <div className='cart-page-container'>
      <h1 className='cart-page-header'>Your Cart</h1>
      {isCartEmpty ? (
        <div className='empty-msg-container'>
          <p className='empty-cart-msg'>Your cart is empty.</p>
        </div>
      ) : (
        <div className='cart-content-container'>
          <CartList cartItems={cart} removeFromCart={removeFromCart} />
          <Checkout cartItems={cart} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
