
import React from 'react';
import './style.css';

const Cart = ({ cart }) => {
  let totalPrice = 0;
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p className='noCardAdd'>No Product added to the cart</p>
      ) : (
        <ul className='cart'>
          {cart.map(item => {
            totalPrice += item.product.price * item.quantity;
            return (
              <li className='namelistP' key={item.product.id}>

                <p>{item.product.name}</p>
                <p> {item.quantity} x {item.product.price}</p>
                {/* <p>{item.product.price} </p> */}

              </li>
            );
          })}
          <h3 className='totalprice'>Total Price: {totalPrice}</h3>
        </ul>

      )}
    </div>
  );
};

export default Cart;