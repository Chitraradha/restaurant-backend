const express=require("express")
const restaurantModel=require("../model/restmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let restaurant=new restaurantModel(data)
    let result=await restaurant.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data=await restaurantModel.find() 
    res.json(data)
})

module.exports=router