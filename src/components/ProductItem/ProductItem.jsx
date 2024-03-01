import './ProductItem.css';

const ProductItem = ({ product }) => {
  console.log(product)
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
