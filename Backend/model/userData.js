const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    username:String,
    password:String,
     phone:Number
})

const userData=mongoose.model('user',userSchema)
module.exports=userData;