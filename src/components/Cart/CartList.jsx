import CartItem from "./CartItem";
import "./CartList.css";

const CartList = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default CartList;
