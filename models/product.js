const mongoose =require ('mongoose');
//each schema links to a mongodb collection
const productSchema =mongoose.Schema ({

    name:{
type:String,
required:true,
    },

    description: {
        type:String,
        required:true,
    },
    product_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    id:String,
    countInStock: {
        type:Number, 
        required:true, 
        min: 0,
        max:50
    }

})

exports.Product =mongoose.model('Product',productSchema);