const Products = require('../services/productsService');

const verifyProductController = async (res, name, quantity) => {
  const data = await Products.insertProduct(name, quantity);
  if (data.err.message === '"name" length must be at least 5 characters long') {
    return res.status(422).json(data);
  }
  if (data.err.message === 'Product already exists') {
    return res.status(422).json(data);
  }
  if (data.err.message === '"quantity" must be larger than or equal to 1') {
    return res.status(422).json(data);
  }
  if (data.err.message === '"quantity" must be a number') {
    return res.status(422).json(data);
  }
};

module.exports = { verifyProductController };
