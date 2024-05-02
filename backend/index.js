const express  = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const bookRoutes = require('./Routes/bookRoutes')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/assistant',bookRoutes);

app.get('/',(req,res)=>{
    res.send("Working.... ")
})

app.listen(PORT,(req,res)=>{
    console.log('running.... ',process.env.PORT);
})
