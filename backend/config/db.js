const mongoose=require("mongoose")

const db="mongodb+srv://vishal1307:1307@cluster0.ddkdrj8.mongodb.net/kota?retryWrites=true&w=majority"

module.exports=()=>{
    return mongoose.connect(db,{
        // useCreateIndexes: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    }).then((res)=>console.log("Connection established")).catch((err)=>console.log("Connection error: " + err.message))
}