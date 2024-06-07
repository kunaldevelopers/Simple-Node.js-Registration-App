const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req, res)=>{
    let {user,password} = req.query;
    res.send(`Hello @${user}, You Are Welcome & Your Password Is ${password}`);
});

app.post("/register", (req, res)=>{
    let {user,password} = req.body;
    res.send(`Hello @${user}, You Are Welcome & Your Password Is ${password}`);
});

app.get("/", (req, res)=>{
    res.send("Machine Is Currently Online!! 😎😎😎");
});

app.listen(port,(req,res)=>{
    console.log("Machine Started!!");
});