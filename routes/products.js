const express = require('express');
const router = express.Router();

//getting the products
router.post ('/',async (req,res)=> {
    try {
        const products=await Product.find();
        res.json (products);
    } catch (err) {
        res.status(500).json({message:err.message});
    }
});
//getting product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); 
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//updating product
router.put('/',async (req,res)=> {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new :true });
        res.json (updated);
    } catch (err) {
        res.status (400).json({message: err.message});

    }
});
//DELETE product
router.delete ('/', async(req,res)=> {
    try {
        await Product.findByIdAndUpdate(req.params.id);
        res.json({message: 'product deleted'});
    } catch (err) {
        res.status (500).json ({message:err.message});
    }
})
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