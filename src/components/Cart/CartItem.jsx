import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className='cart-item'>
      <img src={item.image} alt={item.label} />
      <div>
        <h3>{item.label}</h3>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default CartItem;
