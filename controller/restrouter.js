const express=require("express")
const restaurantModel=require("../model/restmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    res.send("hello")
})

module.exports=router