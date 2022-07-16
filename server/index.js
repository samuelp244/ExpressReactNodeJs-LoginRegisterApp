require('dotenv').config();
const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken');
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
    const role = req.body.role;
    // console.log(req)
    db.query("INSERT INTO users (username,password,role) VALUES (?,?,?)",[username,password,role], 
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
    db.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,password], 
    (err,result)=>{

        if(err) {
            res.send({err:err})
        }
        if(result.length===1){
            // res.send(result[0])
            const token = jwt.sign({
                username: result[0].username,
                role: result[0].role
            },process.env.ACCESS_TOKEN_SECRET
            )
            res.send({message:"OK",user:token})
        }else{
            res.send({message:"wrong username/password",user:false})
        }
        
    })
})

app.get("/api/v1/message",authenticateToken, async(req,res)=>{
    const username = req.user.username;
    // console.log(req)
    db.query("SELECT message FROM users WHERE username = ? ",[username], 
    (err,result)=>{

        if(err) {
            res.send({err:err})
        }
        res.send({quote:result[0]})
        
    })
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.send({error:401});
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if (err) return res.send({error:401});
        req.user = user;
        next();
    })

}

app.listen(3001,()=>{
    console.log("server started at port:3001")
})