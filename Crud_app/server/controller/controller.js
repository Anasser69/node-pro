var Userdb= require('../models/model');


// create and save user
exports.create=(req,res)=>{
if(!req.body){
    res.status(400).send({message:"Cannot leave it empty"})
    return;
}
const User=new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status 
})

User.save(User)
.then(data=>{res.redirect("/")})
.catch(err=>{
    res.status(500).send({
        message:err.message || "Some error happend"
    })
})
}


// find
exports.find=(req,res)=>{
Userdb.find()
.then(user=>{
    res.send(user)
})
.catch(err=>{
    res.status(500).send({message:err.message || "there is no user found"})
})
}

// update user
exports.update=(req,res)=>{
if(!req.body){
    return res.status(400).send({message:"data to be update not found "})
}
 const id=req.params.id;
 Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
 .then(data=>{
    if(!data){
        res.status(404).send({message:`Cannot update with ${id}.Maybe user not found`})
    }
    else(res.send(data))
 })
 .catch(err=>{
    res.status(500).send({message:"error to update "})
 })
}

// delete
exports.delete=(req,res)=>{
const id=req.params.id;

Userdb.findByIdAndDelete(id).then(data=>{
    if(!data){
        res.status(404).send({message:"cannot delete empty data"})
    }
    else{
        res.send({
            message:"delete success"
        })
    }
})
.catch(err=>{
    res.status(500).send({message:`cannot delete ${id}`})
})
}

