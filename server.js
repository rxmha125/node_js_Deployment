const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config();

const PORT= process.env.PORT || 3000;

app.get("/",(req, res, next)=>{
    res.send("Server is live")
})

app.listen(PORT,()=>{
    console.log("Server is runing on port ${PORT}");
})