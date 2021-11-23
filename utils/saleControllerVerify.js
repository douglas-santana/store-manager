const Sales = require('../services/salesService');

const verifySaleController = async (res, items) => {
  const data = await Sales.insertSale(items);
  if (data.err) {
    return res.status(422).json(data);
  }
};

module.exports = { verifySaleController };
