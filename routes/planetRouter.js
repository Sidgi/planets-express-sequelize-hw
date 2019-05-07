const express = require('express');
const {Planet} = require('../models')
const planetRouter = express.Router();

planetRouter.get('/',async(req,res)=>{
  try{
    const allPlanets = await Planet.findAll();
    res.send(allPlanets);
  }catch(e){
    console.log(e.message)
  }
  
});

module.exports = planetRouter;