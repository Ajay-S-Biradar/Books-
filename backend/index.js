const express  = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const bookRoutes = require('./Routes/bookRoutes');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3245;

app.use(express.json());
app.use(cors());
connectDB();

app.use('/api/assistant',bookRoutes);

app.get('/',(req,res)=>{
    res.send("Working.... ")
})

app.listen(PORT,(req,res)=>{
    console.log('running.... ',process.env.PORT);
})
