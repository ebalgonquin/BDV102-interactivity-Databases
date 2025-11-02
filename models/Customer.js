const mongoose = require('mongoose')


const CustomerSchema = new mongoose.Schema ({
name: {
    type: String,
    required:true
},
CustomerOrdered:{
  type: String,
    required:true
},
CustomerDate: {
  type: Date,
    required:true,
    default: Date.now
}

})

//allows to export above to use schema
module.exports = mongoose.model('Customer', CustomerSchema)