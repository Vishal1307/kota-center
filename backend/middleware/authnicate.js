const { rejects } = require('assert')
const bcrypt = require('bcrypt')
const jwt=require("jsonwebtoken")
const { resolve } = require('path')
const privateKey="abcdefghijklmnopqrst"

const verfiyaToken=(token)=>{
    return  new Promise ((resolve,reject)=>{
        jwt.verify(token,privateKey,(err,decoded)=>{
            if(err){
                reject(err)
            }
            resolve(decoded)

        })
        
    })
}








module.exports=async (req,res,next)=>{
    if(!req?.headers?.authorization) return res.status(403).send("please provide valid authorization")
    const bearerToken = req.headers.authorization
    if(!bearerToken.startsWith("Bearer")) return res.status(400).send({mesage:"please provide seriously"})
    const token=bearerToken.split(" ")[1]
    let user;
    try{
        user=await verfiyaToken(token)
        

    }
    catch(err){
        return res.status(403).send(err.message)

    }
    req.user=user.user
    next()
}