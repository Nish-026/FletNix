const express= require("express");
require("dotenv").config()
const cors = require('cors');
const {connection}=require("./db")
const app= express();
const {userRouter}= require("./controller/user.routes")
const {appRouter}= require("./controller/app.routes")
const {authMiddleware}= require("./middleware/authentication")
app.use(express.json())

app.use(cors({
    origin: [
      'https://fletnixv2.netlify.app',
      'http://localhost:4200'
    ]
  }));
  

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with your frontend URL
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/",(req,res)=>{
    res.send({"message":"Welcome to Fletnix"})
})



app.use("/user",userRouter)
app.use(authMiddleware)
app.use("/fletnix",appRouter)
app.listen(process.env.PORT,async()=>{

    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("Server is running")
})
