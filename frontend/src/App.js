import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import './App.css';

function App() {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleEditComplete = () => {
    setEditingProduct(null);
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Product Management System</h1>
      <AddProduct onEditComplete={handleEditComplete} editingProduct={editingProduct} />
      <ProductList onEdit={handleEdit} />
    </div>
  );
}

export default App;
