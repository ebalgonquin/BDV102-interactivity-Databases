const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const product = new Product({
        name: req.body.name,
        countInStock: req.body.countInStock
    });

    product.save()
        .then((createdProduct) => {
            res.status(201).json(createdProduct);
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            });
        });
});