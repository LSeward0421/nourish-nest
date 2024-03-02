import "./CartPage.css";
import CartList from "../components/Cart/CartList";
import Checkout from "../components/Checkout/Checkout";

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page-container">
      <h1>Your Cart</h1>
      <CartList cartItems={cart} removeFromCart={removeFromCart} />
      <Checkout cartItems={cart} />
    </div>
  );
};

export default CartPage;
