const express =require("express");
const colors = require("colors")
const cors= require("cors")
const morgan = require("morgan");
const connectDb= require("./Config/Db")
const dotenv= require("dotenv")
const app=express()// dotenv configuration
dotenv.config()
// Database connecton
connectDb()
//midleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.get("/",(req,res)=>{
  res.send("hello shop@99")
})

// Api routes
app.use("/api/v1",require("./Mvc/Routes/AuthRouter"))

const PORT=process.env.PORT||8081

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`.bgCyan.bgGreen)
})