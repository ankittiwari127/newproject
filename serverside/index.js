const express = require('express');
require("dotenv").config();
const cors=require("cors");
const app=express();
//load config from env
const PORT=process.env.PORT||3000;
//middleware to parse json body request
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//import routes for todo api
const todoRoutes=require("./routes/todo");
app.use("/api/v1",todoRoutes);
//start server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})
//connect database
const dbConnect=require("./config/database");
dbConnect();
//default route
app.get("/",(req,res)=>{
    res.send(`This is home page`);
})