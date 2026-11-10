const veturaService = require('../services/vetura.service');

exports.getAll = (req, res) => res.json(veturaService.findAll());

exports.getById = (req, res) => {
  const vetura = veturaService.findById(Number(req.params.id));
  if (!vetura) return res.status(404).json({ message: 'Vetura nuk u gjet' });
  res.json(vetura);
};

exports.create = (req, res) => {
  const { marka, modeli, targa } = req.body;
  if (![marka, modeli, targa].every((v) => typeof v === 'string' && v.trim())) {
    return res.status(400).json({ message: 'Plotesoni marken, modelin dhe targen' });
  }
  const vetura = veturaService.create({ marka: marka.trim(), modeli: modeli.trim(), targa: targa.trim() });
  res.status(201).json(vetura);
};

exports.remove = (req, res) => {
  const deleted = veturaService.remove(Number(req.params.id));
  if (!deleted) return res.status(404).json({ message: 'Vetura nuk u gjet' });
  res.status(204).send();
};
