import React, { useState } from 'react';
import axios from '../../utils/axios';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/products', formData);
      setMessage('✅ Product created successfully!');
      setFormData({ name: '', price: '', description: '', image: '' });
    } catch (err) {
      setMessage('❌ Failed to create product.');
      console.error(err);
    }
  };

  return (
    <div
      style={{
        maxWidth: '36rem',
        margin: '2.5rem auto',
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: '#1f2937',
        }}
      >
        Create New Product
      </h2>

      {message && (
        <p
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#16a34a',
            fontWeight: '600',
          }}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            border: '1px solid #d1d5db',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
          }}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            border: '1px solid #d1d5db',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
          }}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{
            width: '100%',
            border: '1px solid #d1d5db',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
          }}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          style={{
            width: '100%',
            border: '1px solid #d1d5db',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '0.5rem',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: '500',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2563eb')}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
