const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const PORT = 1000;


require('./config/database');
const User = require('./module/user');


app.use(express.urlencoded({extended:false}));
app.use(express.json());


// Data read
app.get('/api/users',async(req,res)=>{
    let data =  await User.find();
    res.send(data);
 })

 //perticiler user data read
 app.get('/api/users/:_id',async(req,res)=>{
    let data = await User.find(req.params);
    res.send(data);
 })

 //create data
app.post('/api/users',async(req,res)=>{
   let data = new User(req.body);
   let result =  await data.save();
   res.send(result);
})

//delete data
app.delete('/api/users/:_id',async(req,res)=>{
    let data = await User.deleteOne(req.params);
    res.send(data);
 })



//update all data
app.put("/api/users/:_id",async(req,res)=>{
   let data = await User.updateOne(
       req.params,
       {$set:req.body}
   )
   res.send(data);
})


//upadte single data
app.patch('/api/users/:_id',async(req,res)=>{
   let data  = await User.findByIdAndUpdate(req.params._id,req.body);
   res.send(data);
})



app.listen(PORT,()=>{console.log("server Run Properly")});