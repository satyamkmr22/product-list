import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../AddContact.css'; // Importing form-specific CSS

function AddContact({ onContactAdded, editingContact, onEditComplete }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // Populate the form with the editing contact's details if in edit mode
  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setContactNumber(editingContact.contactNumber);
    }
  }, [editingContact]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = { name, email, contactNumber };

    // If in edit mode, send a PUT request to update the contact
    if (editingContact) {
      axios.put(`http://localhost:5000/contacts/${editingContact.id}`, contact)
        .then(() => {
          alert('Contact updated successfully!');
          onEditComplete(); // Callback to signal that editing is done
          setName(''); setEmail(''); setContactNumber('');
        })
        .catch((error) => {
          console.error('There was an error updating the contact!', error);
        });
    } else {
      // If not editing, send a POST request to add a new contact
      axios.post('http://localhost:5000/contacts', contact)
        .then(() => {
          alert('Contact added successfully!');
          onContactAdded();
          setName(''); setEmail(''); setContactNumber('');
        })
        .catch((error) => {
          console.error('There was an error adding the contact!', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingContact ? 'Edit Contact' : 'Add Contact'}</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Contact Number:</label>
        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
      </div>
      <button type="submit">{editingContact ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
}

export default AddContact;
