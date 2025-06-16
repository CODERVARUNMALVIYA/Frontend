
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/Slices/slice';
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
          <button onClick={handleCheckout} style={{   marginTop:'1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        fontWeight: '500', }}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
