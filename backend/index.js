const express=require("express")
const app=express()
const {register,login}=require("./moduleCotrol/userControl")
const product=require("./moduleCotrol/productControl")
app.use(express.json())
app.post("/register", register)
app.post("/login",login)
app.use("/product",product)
app.use(express.static("kota/build"))




module.exports=app