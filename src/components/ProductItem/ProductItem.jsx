import './ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image || null} alt={product.label} />
      <h3>{product.label}</h3>
      <p>Brand: {product.brand || 'No Brand'}</p>
      <p>Category: {product.category}</p>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductItem;


// find a way to clean up the label without the comma, maybe add another util function??