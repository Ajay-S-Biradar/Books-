const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        if(connect) console.log("connected to DB");
    }
    catch(err){
        console.log("error: ",err.message);
    }
}

module.exports = connectDB ;