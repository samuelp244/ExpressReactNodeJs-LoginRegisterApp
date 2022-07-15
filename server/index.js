const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

const mysql = require("mysql2");

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Sam012345",
    database:"users_db"
});

app.post("/api/v1/register", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    // console.log(req)
    db.query("INSERT INTO teachers (username,password) VALUES (?,?)",[username,password], 
    (err,result)=>{
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})
app.post("/api/v1/login", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    // console.log(req)
    db.query("SELECT * FROM teachers WHERE username = ? AND password = ?",[username,password], 
    (err,result)=>{
        if(err) {
            res.send({err:err})
        }
        if(result.length===1){
            res.send(result[0])
        }else{
            res.send({message:"wrong username/password"})
        }
        
    })
})

app.listen(3001,()=>{
    console.log("server started at port:3001")
})