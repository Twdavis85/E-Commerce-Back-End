const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

// find one category by its `id` value
// be sure to include its associated Products .findOne
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

// create a new category .create
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a category by its `id` value .update
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete a category by its `id` value .destroy
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
