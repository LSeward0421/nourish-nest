import { useState } from 'react';
import './ProductItem.css';
import defaultImage from '../../assets/NN_default_img.png';

const ProductItem = ({ product, addToCart }) => {
  const [buttonText, setButtonText] = useState('Add to Cart');
  const [buttonClass, setButtonClass] = useState('');

  const handleAddToCart = () => {
    addToCart(product);
    setButtonText('Added!');
    setButtonClass('animate');

    setTimeout(() => {
      setButtonText('Add to Cart');
      setButtonClass('');
    }, 2000);
  };
  const handleError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className='product-item'>
      <img src={product.image} onError={handleError} alt={product.label} />
      <div className='product-item-details'>
      <h3>{product.label}</h3>
      <p className='brand'>{product.brand || 'No Brand'}</p>
      <p className='category'>{product.category}</p>
      </div>
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
