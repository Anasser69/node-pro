const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path')
dotenv.config({path:path.resolve(__dirname,'./config.env')})
const PORT = 3000;
const morgan = require('morgan')
const bodyparser=require('body-parser')


// Database
const connectDB = require('./server/database/connection')
connectDB()

// log request
app.use(morgan('tiny'))

// body parser 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


// set view engine 
app.set("view engine","ejs")

// load assets 
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))

// load routes
app.use('/',require('./server/routes/router'))


app.listen(PORT,()=>{console.log(`the app is running at http://localhost:${PORT}`)})