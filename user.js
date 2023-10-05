const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
       type: String,
       required:true
    
    },
    email:{
        type: String,
       required:true,
       unique:true
    }
   
});
const user = mongoose.model('ApiREST',userSchema);
module.exports = user;