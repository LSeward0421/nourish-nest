import "./ProductItem.css";
import defaultImage from "../../assets/NN_default_img.png";

const ProductItem = ({ product, addToCart }) => {
  const handleError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="product-item">
      <img src={product.image} onError={handleError} alt={product.label} />
      <h3>{product.label}</h3>
      <p>Brand: {product.brand || "No Brand"}</p>
      <p>Category: {product.category}</p>
      <button className="add-cart-btn" onClick={() => {addToCart(product)}}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
