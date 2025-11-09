const mongoose =require ('mongoose')

const CategorySchema=mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    


})

router.post('/',async(req, res)=>{
    let Category=new Category({
        name:req.body.name
    })
}
)
exports.Category=mongoose.model('Category',CategorySchema)