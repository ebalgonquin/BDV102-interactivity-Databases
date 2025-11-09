const {Category}=require('../models/Category');
const express=require ('express');
const router=express.Router;

router/get('/',async(req,res)=>{
const CategoryList=await Category.find();

if (!CategoryList){
    res.status(500).json({success:false})
}
res.send(CategoryList);
})

router.post('/',async(req,res)=>{
    //create new cateogry
let Category=new Category ({
    nane: req.body.name
})
Category= await Category.save();
//if it works its saved if not then return failed
if(!Category)
    return res.status(404).send('category cannot be created')

res.send(cateogry);
})

model.exports=router;