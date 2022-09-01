const express=require('express');
const User=require("..//module/user")
// const router=express.Router();
const jwt=require("jsonwebtoken")
const privateKey="abcdefghijklmnopqrst"
const newToken=(user)=>{
    return jwt.sign({user:user},privateKey)
}
const {body,validationResult}=require("express-validator")

const register=async (req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email}).lean().exec()
        if(user){
            return res.status(400).send("Email is already registered")
        }

        user=await User.create(req.body)
        const token=newToken(user)
        return res.status(200).send({user,token})


    }
    catch(err){
        return res.status(400).send(err.message)

    }

}
const login=async (req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).send("Email not found")
    }
    const match=user.checkPassword(req.body.password)
    if(!match){
        return res.status(400).send("Password incorrect")
    }
    // user=await User.create(req.body)
    const token=newToken(user)
    return res.status(200).send({token,user})
}

module.exports={register,login}

