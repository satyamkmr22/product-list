const express = require('express');
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');
const router = express.Router();

router.get('/contacts', getContacts);
router.post('/contacts', addContact);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

module.exports = router;
