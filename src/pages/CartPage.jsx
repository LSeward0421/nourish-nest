import "./CartPage.css";
import CartList from "../components/Cart/CartList";
import Checkout from "../components/Checkout/Checkout";

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page-container">
      <h1 className="cart-page-header">Your Cart</h1>
      <div className="cart-content-container">
        <CartList cartItems={cart} removeFromCart={removeFromCart} />
        {cart.length > 0 ? (
          <Checkout cartItems={cart} />
        ) : (
          <div className="empty-msg-container">
            <p className="empty-cart-msg">Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
