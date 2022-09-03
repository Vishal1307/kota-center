const mongoose=require("mongoose")
module.exports=()=>{
    return mongoose.connect("mongodb+srv://vishal1307:1307@cluster0.ddkdrj8.mongodb.net/kota?retryWrites=true&w=majority",{
        // useCreateIndexes: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    }).then((res)=>console.log("Connection established")).catch((err)=>console.log("Connection error: " + err.message))
}