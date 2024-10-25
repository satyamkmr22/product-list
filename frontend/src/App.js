import React, { useState } from 'react';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import axios from 'axios';
import './App.css';

function App() {
  const [editingContact, setEditingContact] = useState(null);

  // Handle editing a contact
  const handleEdit = (contact) => {
    setEditingContact(contact); // Set the contact to be edited
  };

  // Handle deleting a contact
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/contacts/${id}`)
      .then(() => {
        alert('Contact deleted successfully!');
        window.location.reload(); // Reload the page to fetch updated contact list
      })
      .catch((error) => {
        console.error('There was an error deleting the contact!', error);
      });
  };

  // Called when editing is complete to reset the form
  const handleEditComplete = () => {
    setEditingContact(null); // Reset edit mode
    window.location.reload(); // Reload the list after updating
  };

  const handleContactAdded = () => {
    alert('Contact added successfully!');
    window.location.reload(); // Reload the list after adding a contact
  };

  return (
    <div className="App">
      <h1>Contact Management</h1>
      <AddContact
        onContactAdded={handleContactAdded}
        editingContact={editingContact}
        onEditComplete={handleEditComplete}
      />
      <ContactList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
