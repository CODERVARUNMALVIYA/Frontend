import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Slice/slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const handleClick = () => {
    navigate('/create');
   };
   const handleCardClick = () => {
    navigate('/card');
   };

  useEffect(() => {
    axios.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const isInCart = (id) => cartItems.find((item) => item._id === id);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    // navigate('/card');
    toast.success('✅ Added to Cart!');
  };
  

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '2.5rem 1rem'
    }}>
      <h2 style={{
        fontSize: '1.875rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2.5rem',
        color: '#1f2937'
      }}>All Products</h2>

<button
      onClick={handleClick}
      style={{
        marginRight:'1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#10b981',
        color: '#ffffff',
        border: 'none',
        borderRadius: '0.375rem',
        fontWeight: '500',
        cursor: 'pointer',
        margin: '1rem 0'
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#059669')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#10b981')}
    >
      ➕ Create Product
    </button>

    <button
      onClick={handleCardClick}
      style={{
        marginLeft:'1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#10b981',
        color: '#ffffff',
        border: 'none',
        borderRadius: '0.375rem',
        fontWeight: '500',
        cursor: 'pointer',
        margin: '1rem 0'
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#059669')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#10b981')}
    >
      ➕ Card 
    </button>
    

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        maxWidth: '20rem',
        margin: '0 auto'
      }}>
        {products.map((prod) => (
          <div key={prod._id} style={{
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.3s ease-in-out',
            overflow: 'hidden'
          }}>
            <img
              src={prod.image}
              alt={prod.name}
              style={{
                width: '100%',
                height: '12rem',
                objectFit: 'cover',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem'
              }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>{prod.name}</h3>

              <p style={{
                fontSize: '0.875rem',
                color: '#4b5563',
                marginBottom: '1rem'
              }}>{prod.description}</p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#4f46e5'
                }}>₹{prod.price}</span>
              </div>

              <button
                onClick={() => handleAdd(prod)}
                disabled={isInCart(prod._id)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  color: '#ffffff',
                  backgroundColor: isInCart(prod._id) ? '#9ca3af' : '#10b981',
                  cursor: isInCart(prod._id) ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              >
                {isInCart(prod._id) ? '✅ Edit' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;