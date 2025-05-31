const express = require('express');
const router = express.Router();
const clienteController = require('../app/Controllers/ClienteController');

// Create
router.post('/', clienteController.create);

// Read (Individual)
router.get('/:codigo', clienteController.getById);

// Read (All)
router.get('/', clienteController.getAll);

// Update
router.put('/:codigo', clienteController.update);

// Delete
router.delete('/:codigo', clienteController.delete);

module.exports = router; 