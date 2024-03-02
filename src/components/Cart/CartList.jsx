import CartItem from "./CartItem";
import './CartList.css';

const CartList = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
