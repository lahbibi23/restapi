const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
   name: {
    type:String,
    required:true },
   age:Number
})

module.exports= mongoose.model ('user',userSchema)
