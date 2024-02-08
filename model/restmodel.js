const mongoose= require("mongoose")
const restaurantSchema=new mongoose.Schema(
    {
        OrderID:String,
        CustomerName:String,
        CustPhoneNo:String,
        FoodDetails:String,
        Price:String
    }
)
module.exports=mongoose.model("restaurant",restaurantSchema)