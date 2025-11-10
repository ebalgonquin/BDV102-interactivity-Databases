const { Category } = require('../models/Category');
const express = require('express');
const router = express.Router();

//get all categories
router.get('/', async (req, res) => {
    const CategoryList = await Category.find();

    if (!CategoryList) {
        res.status(500).json({ success: false });
    }
    res.send(CategoryList);
});

//create new cateogry
router.post('/', async (req, res) => {
    let Category = new Category({
        name: req.body.name
    });

    Category = await Category.save();
    //if it works its saved if not then return failed
    if (!Category)
        return res.status(404).send('category cannot be created');

    res.send(Category);
});
//deletes the category
router.delete('/:id', (req, res) => {
    Category.findByIdAndRemove(req.params.id).then(category => {
        if (category) {
            return res.status(200).json({ success: true, message: 'the cateogry is deleted' });
        } else {
            return res.status(404).json({ success: false, message: 'category note found' });
        }
    }).catch(err=>{
        return res.status(400).json({success:false, error:err})
    })
});

module.exports = router;