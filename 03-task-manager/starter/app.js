const express=require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require=('dotenv').config
const port = 3000
// app port
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen( port , console.log(`the server conncetd to port ${port}...`))
    }catch (err){
        console.log(err)
    }
}
start()

// middleware
app.use(express.json())


// routes
app.get("/",(req,res)=>{
    res.send('Task Manager App')
})
app.use('/api/v1/tasks',tasks)