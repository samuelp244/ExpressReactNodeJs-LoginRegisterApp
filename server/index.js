const express = require('express');
const app = express();

const mysql = require("mysql2");

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Sam012345",
    database:"users_db"
});

app.get("/hello",(req,res)=>{
    db.query("INSERT INTO teachers (username,password) VALUES ('sam','01234')", 
    (err,result)=>{
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.listen(3001,()=>{
    console.log("server started at port:3001")
})