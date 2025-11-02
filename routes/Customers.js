const express= require('express')
const router= express.Router()
const Customer= require('../models/Customer')

//Getting all customers
router.get('/',async (req,res)=>
{
try {
const Customers= await Customer.find()
res.json(Customers)
}catch (err){
//sends error to user 
res.status(500).json({message: err.message})
}
})

//Getting one
router.get('/:id', getCustomer,(req,res)=>
{
res.json(res.Customer)
})

//Creating one
router.post('/',async(req,res)=>
{
const Customer= new Customer ({
name: req.body.name,
CustomerOrdered: req.body.CustomerOrdered

})
try {

const newCustomer= await Customer.save() 
res.status(201).json(newCustomer)
}catch (err) {
res.status(400).json ({message: err.message})
}
})
//Updating one 
router.patch('/',async (req,res)=>
{

    if (req.body.name !=null) {
        res.Customer.name= req.body.name 
    }
    
    if (req.body.CustomerOrdered !=null) {
        res.Customer.CustomerOrdered= req.body.CustomerOrdered 
    }
    try {
//this is updated customer
const updatedCustomer = await res.Customer.save()
res.json(updatedCustomer)
    } catch (err){
res.status().json ({message: err.message})
    }
})
//Deleting one
router.delete('/',getCustomer, async (req,res)=>
{
try {
    //removes customer from the DB
await res.Customer.remove()
res.json({message: 'Deleted Customer'})
} catch (err) {
    res.status(500).json ({message: err.message})
}
})



//middleware function going to get id and get a customer
async function getCustomer(req, res,next) {
try {
    Customer = await Customer.findById(req.params.id)
    if (Customer==null){
        return res.status(404).json({message:'Cannot find Customer'})
    }
}catch (err) {
    return res.status(500).json({message: err.message})

}
//create a customer gets called by other functions
res.Customer = Customer
//next function lets me move onto nexr piece
next()
}


module.exports = router