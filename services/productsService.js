const Products = require('../models/productsModel');
const { verifyProductService } = require('../utils/productServiceVerify');

const getAllProducts = async () => {
  const allProducts = await Products.getAll();
  return allProducts;
};

const getProductsById = async (id) => {
  const productExists = await Products.getById(id);
  if (!productExists) {
    return { err:
      { code: 'invalid_data', message: 'Wrong id format' } };
  }
  return productExists;
};

const insertProduct = async (name, quantity) => {
  const productExists = await Products.productExists(name);
  const verifys = await verifyProductService(name, quantity);
  if (verifys) return verifys;
  if (productExists) {
    return { err: { code: 'invalid_data', message: 'Product already exists' } };
  }
  return Products.insert(name, quantity);
};

const updateProducts = async (id, name, quantity) => {
  const verifys = await verifyProductService(name, quantity);
  if (verifys) return verifys;
  const data = await Products.update(id, name, quantity);
  return data;
};

const removeProducts = async (id) => {
  const productRemoved = await Products.remove(id);
  console.log(productRemoved);
  return productRemoved;
};

module.exports = { getAllProducts, getProductsById, insertProduct, updateProducts, removeProducts };
