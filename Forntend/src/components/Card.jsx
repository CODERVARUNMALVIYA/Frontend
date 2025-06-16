// src/pages/Card.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ textAlign: 'center' }}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px' }} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>₹{item.price}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout} style={{ marginTop: '1rem' }}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
