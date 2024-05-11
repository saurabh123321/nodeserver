const express = require('express'); 
require('dotenv').config();

const app = express(); 

app.get('/', (req, res) => {
    res.send("Hellow World");
})

app.get('/login', (req, res)=>{
    res.send('<h1>login successful</h1>');
})

app.get('/twitter', (req, res)=>{
    res.send('saurabhkhule143');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening at port ${process.env.PORT}`);
})