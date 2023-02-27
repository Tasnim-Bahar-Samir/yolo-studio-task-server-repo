const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5000;
const cardData = require('./CardData.json')
require('dotenv').config()
const app = express()


//midlewares
app.use(cors())
app.use(express.json())


//routes
app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.get('/data',(req,res)=>{
    res.send({
        success: true,
        data: cardData
    })
})

app.listen(port,()=>{
    console.log("Server is running on port",port)
})