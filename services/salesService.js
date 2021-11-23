const Sales = require('../models/salesModel');
const { verifySalesService } = require('../utils/saleServiceVerify');

const getAllSales = async () => {
  const allSales = await Sales.getAll();
  return allSales;
};

const getSaleById = async (id) => {
  const productExists = await Sales.getById(id);
  if (!productExists) {
    return { err:
      { code: 'not_found', message: 'Sale not found' } };
  }
  return productExists;
};

const insertSale = async (items) => {
  const verifys = await verifySalesService(items);
  if (verifys) return verifys;
  return Sales.insert(items);
};

const updateSale = async (id, items) => {
  const verifys = await verifySalesService(items);
  if (verifys) return verifys;
  const data = await Sales.update(id, items);
  return data;
};

module.exports = { getAllSales, getSaleById, insertSale, updateSale };
