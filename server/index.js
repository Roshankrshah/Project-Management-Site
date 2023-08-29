require('dotenv').config();
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Starting Project Management Project with Graphql');
});

const PORT = 2525;
const start = ()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening at http://localhost:${PORT}`);
    })
};

start();