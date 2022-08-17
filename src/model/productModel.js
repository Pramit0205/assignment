
const mongoose=require('mongoose')


const productSchema = new mongoose.Schema({
    name:{type:String , trim:true,required:true},
    quantity:{type:Number,trim:true,required:true},
    amount:{type:Number,trim:true,required:true}  

},{timestamps:true})


module.exports=mongoose.model("product",productSchema)