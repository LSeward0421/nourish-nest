import CartItem from './CartItem';
import './CartList.css';

const CartList = ({ cartItems, removeFromCart }) => {
  return (
    <div className='cart-list'>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default CartList;
