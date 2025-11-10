const mongoose = require('mongoose')


const userSchema = new mongoose.Schema ({
name: {
    type: String,
    required:true
},
email_address: {
  type:String,
  required:true
},
userOrdered:{
  type: String,
    required:true
},
userDate: {
  type: Date,
    required:true,
    default: Date.now
}

})

//allows to export above to use schema
module.exports = mongoose.model('user', userSchema)