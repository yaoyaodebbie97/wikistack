const express = require('express');
const router = express.Router();
// router.use('/',router);
const {addPage} = require('../views');

router.get('/',(req,res) =>{
    res.send('this is to get the wiki page');
})



router.get('/add',(req,res) =>{
    res.send(addPage());
})

router.post('/',(req,res)=>{
    // res.send('this to post to the wiki page');
    res.json(req.body);
})

module.exports = router;