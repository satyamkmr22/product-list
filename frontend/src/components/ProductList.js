import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api/productApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import '../ProductList.css';

function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minQuantity, setMinQuantity] = useState('');
  const [maxQuantity, setMaxQuantity] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    // Fetch all products initially
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id)
        .then(() => {
          // Refresh the product list after deletion
          setProducts(products.filter(product => product.id !== id));
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  };

  // Filter products based on search term and additional filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinPrice = minPrice ? product.price >= minPrice : true;
    const matchesMaxPrice = maxPrice ? product.price <= maxPrice : true;
    const matchesMinQuantity = minQuantity ? product.quantity >= minQuantity : true;
    const matchesMaxQuantity = maxQuantity ? product.quantity <= maxQuantity : true;

    return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesMinQuantity && matchesMaxQuantity;
  });

  return (
    <div className="product-list">
      <h2>Product List</h2>

      <div className="filter-options">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="filter-button" onClick={() => setFilterOpen(!filterOpen)}>
          <FontAwesomeIcon icon={faFilter} /> Filter
        </button>
        {filterOpen && (
          <div className="dropdown">
            <div>
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="filter-input"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="filter-input"
              />
              <input
                type="number"
                placeholder="Min Quantity"
                value={minQuantity}
                onChange={(e) => setMinQuantity(e.target.value)}
                className="filter-input"
              />
              <input
                type="number"
                placeholder="Max Quantity"
                value={maxQuantity}
                onChange={(e) => setMaxQuantity(e.target.value)}
                className="filter-input"
              />
            </div>
          </div>
        )}
      </div>

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button className="edit-btn" onClick={() => onEdit(product)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
}

export default ProductList;
