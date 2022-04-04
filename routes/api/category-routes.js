const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => {
      return res.json(categories);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });

  
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where:{id: req.params.id},
    include: [Product]
  })
  // be sure to include its associated Products
  .then((category) => {
    return res.json(category);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => {
    return res.json(category);
  

  })
  .catch((err) => {
    return res.status(400).json(err);
  })


}); 
  

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
