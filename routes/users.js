const express= require('express')
const router= express.Router()
const user= require('../models/user')

//Getting all users
router.get('/',async (req,res)=>
{
try {
const users= await user.find()
res.json(users)
}catch (err){
//sends error to user 
res.status(500).json({message: err.message})
}
})

//Getting one
router.get('/:id', getuser,(req,res)=>
{
res.json(res.user)
})

//Creating one
router.post('/',async(req,res)=>
{
const user= new user ({
name: req.body.name,
userOrdered: req.body.userOrdered

})
try {

const newuser= await user.save() 
res.status(201).json(newuser)
}catch (err) {
res.status(400).json ({message: err.message})
}
})
//Updating one 
router.patch('/',async (req,res)=>
{

    if (req.body.name !=null) {
        res.user.name= req.body.name 
    }
    
    if (req.body.userOrdered !=null) {
        res.user.userOrdered= req.body.userOrdered 
    }
    try {
//this is updated user
const updateduser = await res.user.save()
res.json(updateduser)
    } catch (err){
res.status().json ({message: err.message})
    }
})
//Deleting one
router.delete('/',getuser, async (req,res)=>
{
try {
    //removes user from the DB
await res.user.remove()
res.json({message: 'Deleted user'})
} catch (err) {
    res.status(500).json ({message: err.message})
}
})



//middleware function going to get id and get a user
async function getuser(req, res,next) {
try {
    user = await user.findById(req.params.id)
    if (user==null){
        return res.status(404).json({message:'Cannot find user'})
    }
}catch (err) {
    return res.status(500).json({message: err.message})

}
//create a user gets called by other functions
res.user = user
//next function lets me move onto nexr piece
next()
}


module.exports = router