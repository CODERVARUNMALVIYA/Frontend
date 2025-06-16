// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, items: cartItems }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error('Checkout Error:', err);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Checkout</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '250px' }}
      />
      <br />
      <button onClick={handleCheckout} style={{  marginTop:'1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        fontWeight: '500', }}>
        OK
      </button>
    </div>
  );
};

export default Checkout;
