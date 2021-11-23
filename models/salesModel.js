const { ObjectId } = require('mongodb');
const connection = require('./mongodbConnection');

const getAll = async () => {
  const db = await connection();
  return db.collection('sales').find().toArray();
};

const getById = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) return null;
  return db.collection('sales').findOne({ _id: ObjectId(id) });
};

const insert = async (items) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('sales').insertOne({
    itensSold: items,
  });
  return { _id, itensSold: items };
};

const update = async (id, items) => {
  const db = await connection();
  db.collection('products').updateOne(
    { _id: ObjectId(id) },
    { $set: { itensSold: items } },
  );
  return { _id: ObjectId(id), itensSold: items };
};

module.exports = { getAll, getById, insert, update };
