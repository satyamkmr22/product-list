import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleEditComplete = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
    window.location.reload();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      {/* Conditionally render the header */}
      {location.pathname !== '/' && (
        <div style={{ backgroundColor: '#007bff', color: 'white', width: '100%', padding: '15px', textAlign: 'center' }}>
          <h1>Product Management System</h1>
        </div>
      )}
      {/* Apply appContent class only for /products route */}
      <div className={location.pathname === '/products' ? 'appContent' : ''}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={
            <>
              <div className="buttonContainer">
                <button className="addProductButton" onClick={toggleModal}>
                  {isModalOpen ? 'Show Products' : 'Add Product'}
                </button>
              </div>
              <ProductList onEdit={handleEdit} />
              {isModalOpen && (
                <div className="modalOverlay" onClick={toggleModal}>
                  <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                    <button className="closeModal" onClick={toggleModal}>×</button>
                    <AddProduct onEditComplete={handleEditComplete} editingProduct={editingProduct} />
                  </div>
                </div>
              )}
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
