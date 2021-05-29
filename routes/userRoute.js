const express = require('express');
const router = express.Router();
const Data = require('../models/userModel');

router.post('/',async (req,res)=>{
    try{
    const data = await Data({
        name:req.body.name,
        email:req.body.email,
        text:req.body.text
    })
    const savedata = await data.save();
    console.log(savedata)
    res.render('index');
    
    }
    catch(err){
        console.log("Error".err[0]);
    }
})

module.exports = router;