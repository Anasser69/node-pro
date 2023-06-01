const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
const connectDB=async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_LINK,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        })
console.log("connected to DB")
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
    module.exports = connectDB