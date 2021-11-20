const { ObjectId } = require('mongodb');
const connection = require('./mongodbConnection');

const getAll = async () => {
  const db = await connection();
  return db.collection('products').find().toArray();
};

const getById = async (id) => {
  const db = await connection();
  if (ObjectId.isValid(id)) {
    return db.collection('products').findOne({ _id: ObjectId(id) });
  }
};

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

const update = async (id, name, quantity) => {
  const db = await connection();
  db.collection('products').updateOne(
    { _id: ObjectId(id) },
    { $set: { name, quantity } },
  );
  return { name, quantity };
};

module.exports = { getAll, getById, productExists, insert, update };
