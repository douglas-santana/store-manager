const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

app.get('/products', productsController.getAllProducts);
app.get('/products/:id', productsController.getProductsById);
app.post('/products', productsController.insertProduct);
app.put('/products/:id', productsController.updateProducts);
app.delete('/products/:id', productsController.removeProducts);

app.get('/sales', salesController.getAllSales);
app.get('/sales/:id', salesController.getSaleById);
app.post('/sales', salesController.insertSale);

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
