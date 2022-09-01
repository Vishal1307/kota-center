const express=require('express');
const router=express.Router()
const Product=require("..//module/product")
const {uploadSingle}=require("..//middleware/upload")
// const {authinacte} =require("..//middleware/authnicate");
const authnicate = require('..//middleware/authnicate');
const authorise = require('..//middleware/authorise');

router.post("",authnicate,authorise(["admin"]),uploadSingle("image_url"),async (req,res)=>{
    try{
        // const filePath=req.files.map((file)=>file.path)
        const product= await Product.create({
            question:req.body.question,
            option1:req.body.option1,
            option2:req.body.option2,
            option3:req.body.option3,
            option4:req.body.option4,
            // image_url:req.file.path,
            answer:req.body.answer,


        })
        return res.status(200).send(product)

    }
    catch(err){
        return res.status(404).send({message: err.message});
    }
})
router.get("",async (req,res)=>{
    try{
        const product=await Product.find().lean().exec()
        const total=await Product.countDocuments()
        return res.status(200).send({product,total})

    }
    catch (err){
        return res.status(404).send({message: err.message});
    }
})
router.get("/:id",authnicate,async (req,res)=>{
    try{
        const product=await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(product)

    }
    catch(err){
        return res.status(404).send({message: err.message});
    }
})
router.delete("/:id",async (req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(product)

    }
    catch(err){
        return res.status(404).send({message: err.message});
    }
})
router.patch("/:id",authnicate,authorise(["admin"]),async (req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,req.body).lean().exec()
        return res.status(200).send(product)

    }
    catch(err){
        return res.status(404).send({message: err.message});
    }
})
module.exports=router