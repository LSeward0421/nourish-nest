import './ProductItem.css';
// need to still figure out what other details I want to include that are relevant 

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.label} />
      <h3>{product.label}</h3>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductItem;
