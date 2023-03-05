const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config({path:'/Crud_app/config.env'})
const PORT = 3000;
const morgan = require('morgan')
const bodyparser=require('body-parser')
const path=require("path")

app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/add-user",(req,res)=>{
    res.render('add_user');
})
app.get("/update-user",(req,res)=>{
    res.render('update_user');
})

// log request
app.use(morgan('tiny'))

// body parser 
app.use(bodyparser.urlencoded({extended:true}))

// set view engine 
app.set("view engine","ejs")

// load assets 
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))



app.listen(PORT,()=>{console.log(`the app is running at http://localhost:${PORT}`)})