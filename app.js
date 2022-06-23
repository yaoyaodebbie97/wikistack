const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const layout = require("./views/layout");

app.use(morgan('dev'));

const staticMiddleware = express.static(path.join(__dirname ,'public'));
app.use(staticMiddleware);

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) =>{
    res.send(layout(''));
})

const port = 3000;
app.listen(port,()=>{
    console.log('app listening at port 3000')
})