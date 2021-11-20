const Products = require('../services/productsService');
const { verifyProductController } = require('../utils/productControllerVerify');

const getAllProducts = async (_req, res) => {
  const data = await Products.getAllProducts();
  console.log(data);
  return res.status(200).json({ products: data });
};

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Products.getProductsById(id);

    if (!data.err) return res.status(200).json(data);
    return res.status(422).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Problema ao buscar por id' });
  }
};

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

module.exports = { getAllProducts, getProductsById, insertProduct };
