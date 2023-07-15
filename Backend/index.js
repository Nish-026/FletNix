const express= require("express");
require("dotenv").config()
const {connection}=require("./db")
const app= express();
const {userRouter}= require("./controller/user.routes")
const {appRouter}= require("./controller/app.routes")
const {authMiddleware}= require("./middleware/authentication")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send({"message":"Welcome to Netflix"})
})
app.use("/user",userRouter)
app.use(authMiddleware)
app.use("/data",appRouter)
app.listen(process.env.PORT,async()=>{

    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("Server is running")
})
