
const mongoose=require('mongoose')


const userSchema = new mongoose.Schema({
    name:{type:String , trim:true,required:true},
    user_id:{type:Number, $inc: { seq: 1 },trim:true,required:true},
    password:{type:String,trim:true,required:true},
    email_id:{type:String,trim:true,required:true, unique: true},
    user_name:{type:String,unique:true,trim:true,required:true,},
    gender:{type:String,required:true,enum:["male","female","other"],trim:true},
    mobile:{type:Number,required:true,unique:true,default:"+91"},
    profile:{type:String,trim:true,required:true,enum:["public","privet"],default:"public"}

},{timestamps:true})


module.exports=mongoose.model("user",userSchema)