const { ObjectId } = require('mongodb');

const validate = (productId, quantity) => {
  if (!ObjectId.isValid(productId) || quantity <= 0) {
    return { err:
      { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' } };
  }
  if (typeof quantity !== 'number') {
    return { err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' },
    };
  }
};

const verifySalesService = (items) => {
  for (let i = 0; i < items.length; i += 1) {
    const { productId, quantity } = items[i];
    const existErr = validate(productId, quantity);
    if (existErr) return existErr;
  }
};

module.exports = { verifySalesService };
