import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api/productApi';
import '../ProductList.css';

function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id)
        .then(() => window.location.reload())
        .catch((error) => console.error('Error deleting product:', error));
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button className="edit-btn" onClick={() => onEdit(product)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
