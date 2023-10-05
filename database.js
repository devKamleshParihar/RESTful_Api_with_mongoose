const mongoose = require('mongoose');

//database
const db = mongoose.connect("mongodb://127.0.0.1:27017",
    {dbname:"restApi"})
    .then(()=>{
        console.log('connected');
    })
    .catch((e)=>{
        console.log(e);
    });


module.exports = db; 