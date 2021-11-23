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

const insert = async (data) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('sales').insertOne({
    itensSold: data,
  });
  return { _id, itensSold: data };
};

module.exports = { getAll, getById, insert };
