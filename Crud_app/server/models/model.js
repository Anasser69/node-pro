const mongoose=require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    gender:string,
    status:string
})

const userdb=mongoose.model(`userdb`,schema);

module.export=userdb;




