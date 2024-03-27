import React from 'react';
import './style.css';

const ProductList = ({ products, addToCart, removeFromCart, cart }) => {

  const getProductQuantity = (productId) => {
    const cartItem = cart.find(item => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="product-list-container">
      <h2 className='nameofproduct'>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className='productName-li'>
            <div className='productName'>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <div>
              <button onClick={() => addToCart(product)}>+</button>
              <span className="quantity">{getProductQuantity(product.id)}</span>
              <button className='minbtn' onClick={() => removeFromCart(product)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;