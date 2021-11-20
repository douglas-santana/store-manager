const Products = require('../services/productsService');
const { verifyProductController } = require('../utils/productControllerVerify');

const getAllProducts = async (_req, res) => {
  const data = await Products.getAllProducts();
  return res.status(200).json({ products: data });
};

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Products.getProductsById(id);
    if (!data.err) return res.status(200).json(data);
    return res.status(422).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Problema ao buscar por id' });
  }
};

const insertProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const productInserted = await Products.insertProduct(name, quantity);
    if (!productInserted.err) return res.status(201).json(productInserted);
    await verifyProductController(res, name, quantity);
  } catch (error) {
    res.status(500).json({ message: 'Problema ao inserir' });
  }
};

const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const productUpdated = await Products.updateProducts(id, name, quantity);
    if (!productUpdated.err) return res.status(200).json(productUpdated);
    await verifyProductController(res, name, quantity);
  } catch (error) {
    res.status(500).json({ message: 'Problema ao atualizar' });
  }
};

module.exports = { getAllProducts, getProductsById, insertProduct, updateProducts };
