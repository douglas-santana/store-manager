const Products = require('../models/productsModel');

const getAllProducts = async () => {
  const data = await Products.getAll();
  return data;
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
  if (name.length < 6) {
    return { err:
      { code: 'invalid_data', message: '"name" length must be at least 5 characters long' } };
    }
  if (quantity <= 0) {
    return { err:
      { code: 'invalid_data', message: '"quantity" must be larger than or equal to 1' } };
  }
  if (typeof quantity !== 'number') {
    return { err: { code: 'invalid_data', message: '"quantity" must be a number' },
    };
  }
  if (productExists) {
    return { err: { code: 'invalid_data', message: 'Product already exists' } };
  }
  return Products.insert(name, quantity);
};

module.exports = { getAllProducts, getProductsById, insertProduct };
