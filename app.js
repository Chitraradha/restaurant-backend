const express =require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const restaurantrouter=require("./controller/restrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Chitrakradha2000:radha2000@cluster0.djtheuk.mongodb.net/restaurantDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/restaurant",restaurantrouter)

app.listen(3011,()=>{
    console.log("server running");
})