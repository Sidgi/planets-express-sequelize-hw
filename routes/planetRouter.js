const express = require('express');
const {Planet} = require('../models')
const planetRouter = express.Router();

planetRouter.get('/',async(req,res)=>{
  try{
    const allPlanets = await Planet.findAll();
    res.send(allPlanets);
  }catch(e){
    console.log(e.messages)
  } 
});

planetRouter.get('/:id',async(req,res)=>{
  try{
    const onePlanet = await Planet.findByPk(req.params.id);
    res.send(onePlanet);
  }catch(e){
    console.log(e.messages)
  }
})

module.exports = planetRouter;