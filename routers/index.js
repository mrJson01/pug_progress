const express = require('express');

const Router = express.Router();

Router.get('/attributes',(req,res)=>{
    res.render('attributes');
});

Router.get('/case',(req,res)=>{
    res.render('case');
});

Router.get('/code',(req,res)=>{
    res.render('code');
})

module.exports = Router;