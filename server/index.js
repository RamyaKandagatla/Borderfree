const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
require('./database/databaseconnection');


// app.get('/',(req,res)=>{
//     return res.send("hello world");
// })
app.listen(process.env.PORT,()=>{
    console.log(`serve is running at ${process.env.PORT}`);
});