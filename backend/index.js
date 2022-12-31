const express = require('express');
const app = express();
const Blog = require('./db/Blog');
const User = require("./db/User")
require("./db/config");
const cors = require('cors')
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get('/',(req,res)=>{
    res.status(200).send("This is here")
});

app.post("/add-blog",(req,res)=>{
    Blog.create(req.body,(err,data)=>{
        if(err)
        {
           res.status(500).send(err)
        }else{
          res.status(201).send(data);
        }
    })
})
app.get("/get-blog",(req,res)=>{
   Blog.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.post("/signup-user",(req,res)=>{
    if(req.body.name && req.body.email && req.body.password)
    User.create(req.body,(err,data)=>{
        if(err)
        {
             res.status(500).send(err);
        }
        else{
            res.status(201).send("User Creatd");
        }
    })
})

app.post("/login-user", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
              
                res.status(201).send(user);

            }
            else{
                res.status(500).send({message:"NO USER FOUND"});
            }

    }
    else {
        res.send({message:"NO USER FOUND"});
    }
})

app.post("/user-blog",(req,res)=>{
    // console.log((req.body));
   Blog.find({email:req.body.mail},(err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.delete("/delete-blog",(req,res)=>{
 console.log(req.body,typeof(req.body));
    Blog.findByIdAndDelete({_id:req.body.id},(err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.post("/update-likes",(req,res)=>{
    Blog.findByIdAndUpdate({_id:req.body.id},{likes:req.body.like},(err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.listen(PORT, (req, res) => {
    console.log("server is running");
})