const Sales = require('../services/salesService');
const { verifySaleController } = require('../utils/saleControllerVerify');

const getAllSales = async (_req, res) => {
  const allSales = await Sales.getAllSales();
  return res.status(200).json({ sales: allSales });
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const salesById = await Sales.getSaleById(id);
    if (!salesById.err) return res.status(200).json(salesById);
    return res.status(404).json(salesById);
  } catch (error) {
    return res.status(500).json({ message: 'Problema ao buscar por id' });
  }
};

const insertSale = async (req, res) => {
  try {
    const items = req.body;
    const saleInserted = await Sales.insertSale(items);
    if (!saleInserted.err) return res.status(200).json(saleInserted);
    await verifySaleController(res, items);
  } catch (error) {
    res.status(500).json({ message: 'Problema ao inserir' });
  }
};

const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const items = req.body;
    const productUpdated = await Sales.updateSale(id, items);
    if (!productUpdated.err) return res.status(200).json(productUpdated);
    await verifySaleController(res, items);
  } catch (error) {
    res.status(500).json({ message: 'Problema ao atualizar' });
  }
};

module.exports = { getAllSales, getSaleById, insertSale, updateSale };
