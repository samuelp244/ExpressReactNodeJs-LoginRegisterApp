const express = require('express');
const app = express();


app.get("/hello",(req,res)=>{
    res.send("hii")
})

app.listen(3001,()=>{
    console.log("server started at port:3001")
})