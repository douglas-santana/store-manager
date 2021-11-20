const connection = require('./mongodbConnection');

const productExists = async (name) => {
  const db = await connection();
  return db.collection('products').findOne({ name });
};

const insert = async (name, quantity) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('products').insertOne({
    name, quantity,
  });
  return { _id, name, quantity };
};

module.exports = { productExists, insert };
