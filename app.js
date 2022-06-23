const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const layout = require("./views/layout");
const pg = require('pg');
const { db, Page, User } = require('./models');

const wikiRouter = require('./routes/wiki');
const usersRouter = require ('./routes/users');

app.use('/wiki',wikiRouter);
app.use('/users',usersRouter);

app.use(morgan('dev'));

const staticMiddleware = express.static(path.join(__dirname ,'public'));
app.use(staticMiddleware);

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) =>{
    // res.send(layout(''));
    res.redirect('/wiki');
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

  

const init =async()=>{
    await db.sync({force:true});
    
}
init()

const port = 3000;
app.listen(port,()=>{
    console.log('app listening at port 3000')
})

