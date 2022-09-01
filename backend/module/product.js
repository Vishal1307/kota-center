const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    question:{type:String, required:true},
    option1:{type:String, required:true},
    option2:{type:String, required:true},
    option3:{type:String, required:true},
    option4:{type:String, required:true},
    // image_url:{type:String, required:true},
    // video_url:{type:String, required:true},
    answer:{type:String, required:true}
},{
    versionKey:false,
    timeseries:true
})
module.exports=mongoose.model("product",productSchema)