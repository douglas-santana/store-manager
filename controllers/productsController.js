const Products = require('../services/productsService');
const { verifyProductController } = require('../utils/productControllerVerify');

const insertProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const data = await Products.insertProduct(name, quantity);
    if (!data.err) return res.status(201).json(data);
    await verifyProductController(res, name, quantity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Problema ao inserir' });
  }
};

module.exports = { insertProduct };
