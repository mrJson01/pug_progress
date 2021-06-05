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
});

Router.get('/conditionals',(req,res)=>{
    res.render('conditionals');
});

Router.get('/includes',(req,res)=>{
    res.render('includes');
});

Router.get('/interpolation',(req,res)=>{
    res.render('interpolation');
});

Router.get('/iteration',(req,res)=>{
    res.render('iteration');
});

module.exports = Router;