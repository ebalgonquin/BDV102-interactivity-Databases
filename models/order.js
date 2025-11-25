const mongoose=require('mongoose')
//holds order information
const orderSchema =mongoose.Schema({
orderItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'OrderItem',
    required:true 
}],
shippingAddress: {
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
postalCode : {
    type:String,
    required:true
},
country: {
    type:String,
    required:true
},
phone: {
    type:Number,
    required:true
},
status: {
    type:String,
    default:'Pending'
},
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',

},
dateOrdered: {
    type:Date,
    default:Date.now,
}
}) 

exports.Order= mongoose.model('Order', orderSchema);