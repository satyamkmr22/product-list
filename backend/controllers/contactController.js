const pool = require('../config/db');

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new contact
const addContact = async (req, res) => {
  const { name, email, contactNumber } = req.body;
  try {
    await pool.query(
      'INSERT INTO contacts (name, email, contactNumber) VALUES ($1, $2, $3)',
      [name, email, contactNumber]
    );
    res.status(201).json({ message: 'Contact added successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, contactNumber } = req.body;
  try {
    await pool.query(
      'UPDATE contacts SET name = $1, email = $2, contactNumber = $3 WHERE id = $4',
      [name, email, contactNumber, id]
    );
    res.status(200).json({ message: 'Contact updated successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
    res.status(200).json({ message: 'Contact deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};
