import { useState } from "react";
import "./ProductItem.css";
import defaultImage from "../../assets/NN_default_img.png";

const ProductItem = ({ product, addToCart }) => {
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [buttonClass, setButtonClass] = useState("");

  const handleAddToCart = () => {
    addToCart(product);
    setButtonText("Added!");
    setButtonClass("animate");

    setTimeout(() => {
      setButtonText("Add to Cart");
      setButtonClass("");
    }, 2000);
  };
  const handleError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="product-item">
      <img src={product.image} onError={handleError} alt={product.label} />
      <h3>{product.label}</h3>
      <p>Brand: {product.brand || "No Brand"}</p>
      <p>Category: {product.category}</p>
      <button
        className={`add-cart-btn ${buttonClass}`}
        onClick={handleAddToCart}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductItem;
