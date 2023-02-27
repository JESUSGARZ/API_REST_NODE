const express = require('express');
const { lorem } = require('faker');
const ProductsService = require('./../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);

});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct =  await  service.create();
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id,body)
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;

