const Cliente = require('../Models/ClienteModel');

// Create
exports.create = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'CPF já cadastrado.' });
    }
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Read (Individual)
exports.getById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Read (All)
exports.getAll = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    await cliente.update(req.body);
    res.status(200).json(cliente);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'CPF já cadastrado.' });
    }
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    await cliente.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}; 