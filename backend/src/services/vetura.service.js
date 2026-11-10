const Vetura = require('../models/vetura.model');

// Te dhenat ruhen perkohesisht ne memorie, si ne shabllon.
let veturat = [
  new Vetura(1, 'Volkswagen', 'Golf 7', '01-123-AB'),
  new Vetura(2, 'Audi', 'A4', '02-456-CD'),
  new Vetura(3, 'Mercedes-Benz', 'C 220', '03-789-EF'),
];
let nextId = 4;

exports.findAll = () => veturat;
exports.findById = (id) => veturat.find((v) => v.id === id);

exports.create = ({ marka, modeli, targa }) => {
  const vetura = new Vetura(nextId++, marka, modeli, targa);
  veturat.push(vetura);
  return vetura;
};

exports.remove = (id) => {
  const count = veturat.length;
  veturat = veturat.filter((v) => v.id !== id);
  return veturat.length < count;
};
