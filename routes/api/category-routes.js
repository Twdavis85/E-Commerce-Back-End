const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  }).then(dbRes => {
    res.json(dbRes)
  }).catch(err => {
    res.json(err)
  }) 
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(dbRes => {
    res.json(dbRes)
  }).catch(err => {
    res.json(err)
  }) 
  // find one category by its `id` value
  // be sure to include its associated Products .findOne
});

router.post('/', (req, res) => {
  // create a new category .create
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value .update
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value .destroy
});

module.exports = router;
