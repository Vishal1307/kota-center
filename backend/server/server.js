const app=require("..//index")
const connect=require("..//config/db")


app.listen(3000,async()=>{
    await connect()
    console.log("Server is running on port 3000")

})