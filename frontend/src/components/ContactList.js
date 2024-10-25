import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../ContactList.css';

function ContactList({ onEdit, onDelete }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state

  // Fetch contacts when component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contacts');
        setContacts(response.data);  // Store fetched contacts in state
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('There was an error fetching the contacts!', error);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);  // Empty dependency array ensures this only runs once when component mounts

  // Display loading spinner or message while fetching data
  if (loading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (  // Handle empty contact list case
        <p>No contacts found</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>Name:</strong> {contact.name} <br />
              <strong>Email:</strong> {contact.email} <br />
              <strong>Contact Number:</strong> {contact.contactNumber} <br />
              <button onClick={() => onEdit(contact)}>Edit</button>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
