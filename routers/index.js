const express = require('express');

const Router = express.Router();

Router.get('/attributes',(req,res)=>{
    res.render('attributes');
});

module.exports = Router;