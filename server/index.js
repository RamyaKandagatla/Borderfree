const express=require('express');
const app=express();
// app.use(express.urlencoded({extended:true}));
const dotenv=require('dotenv');
dotenv.config();
const bodyparser=require('body-parser');
app.use(bodyparser());
require('./database/databaseconnection');
const faker=require("faker");



const Carousels=require('./models/carousel');
const Cards=require('./models/cards');

const carouselroutes=require('./routes/carousel');
const cardsroutes=require('./routes/cards')
// app.get('/',(req,res)=>{
//     return res.send("hello world");
// })

app.use('/',carouselroutes);
app.use('/',cardsroutes);

app.listen(process.env.PORT,()=>{
    console.log(`serve is running at ${process.env.PORT}`);
});